import { Request, Response } from "express";
import { Types } from "mongoose";
import {
    addArtifacts,
    fetchArtifacts,
    fetchArtifact,
    modifyArtefact,
    removeArtifact
} from "../services/ArtifactsService";

export const getArtifactsHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const artifacts = await fetchArtifacts();
        res.status(200).json({ success: true, data: artifacts });
    } catch (error: unknown) {
        res.status(500).json({ success: false, message: "Błąd podczas pobierania artefaktów" });
    }
};

export const getArtifactHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const artifactId = new Types.ObjectId(req.params.id.toString());
        const artifacts = await fetchArtifact(artifactId);
        res.status(200).json({ success: true, data: artifacts });
    } catch (error: unknown) {
        res.status(500).json({ success: false, message: "Błąd podczas pobierania artefaktów" });
    }
};

export const createArtifactHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const newArtifact = await addArtifacts(req.body);
        res.status(201).json({ success: true, data: newArtifact });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Nieznany błąd walidacji" });
        }
    }
};

export const updateArtifactHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const artifactId = new Types.ObjectId(req.params.id.toString());
        const updatedArtifact = await modifyArtefact(artifactId, req.body);

        res.status(200).json({ success: true, data: updatedArtifact });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Błąd aktualizacji artefaktu" });
        }
    }
};

export const deleteArtifactHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const artifactId = new Types.ObjectId(req.params.id.toString());
        const deletedArtifact = await removeArtifact(artifactId);

        res.status(200).json({ success: true, data: deletedArtifact });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Błąd usuwania artefaktu" });
        }
    }
};