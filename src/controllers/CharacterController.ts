import { Request, Response } from "express";
import { Types } from "mongoose";
import {
    addCharacter,
    fetchCharacters,
    fetchCharacter,
    modifyCharacter,
    removeCharacter
} from "../services/CharacterService";

export const getCharactersHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const characters = await fetchCharacters();
        res.status(200).json({ success: true, data: characters });
    } catch (error: unknown) {
        res.status(500).json({ success: false, message: "Błąd podczas pobierania postaci" });
    }
};

export const getCharacterHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const characterId = new Types.ObjectId(req.params.id.toString());
        const characters = await fetchCharacter(characterId);
        res.status(200).json({ success: true, data: characters });
    } catch (error: unknown) {
        res.status(500).json({ success: false, message: "Błąd podczas pobierania postaci" });
    }
};

export const createCharacterHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCharacter = await addCharacter(req.body);
        res.status(201).json({ success: true, data: newCharacter });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Nieznany błąd walidacji" });
        }
    }
};

export const updateCharacterHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const characterId = new Types.ObjectId(req.params.id.toString());
        const updatedCharacter = await modifyCharacter(characterId, req.body);

        res.status(200).json({ success: true, data: updatedCharacter });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Błąd aktualizacji postaci" });
        }
    }
};

export const deleteCharacterHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const characterId = new Types.ObjectId(req.params.id.toString());
        const deletedCharacter = await removeCharacter(characterId);

        res.status(200).json({ success: true, data: deletedCharacter });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        } else {
            res.status(400).json({ success: false, message: "Błąd usuwania postaci" });
        }
    }
};