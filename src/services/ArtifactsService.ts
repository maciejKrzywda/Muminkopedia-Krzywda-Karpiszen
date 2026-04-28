// to jest ArtifactsService - to robi service artefaktom (cokolwiek to oznacza)

import {Artifact} from "../models/Artifact.model";
import {Types} from "mongoose";
import {createArtifact,
    deleteArtifact,
    findAllArtifacts,
    findAnArtifact,
    updateArtifact
} from "../repositories/ArtifactsRepository";

export async function addArtifacts(artifactData: Artifact): Promise<Artifact> {
    if(!artifactData.owner || !artifactData.name || !artifactData.description || !artifactData.property) {
        throw new Error("Wszystkie pola wymagane: owner, name, description, property")
    }
    return await createArtifact(artifactData);
}

export async function fetchArtifacts(): Promise<Artifact[]> {
    return await findAllArtifacts();
}

export async function fetchArtifact(artifactId: Types.ObjectId): Promise<Artifact[]> {
    const fetchedArtifact = await findAnArtifact(artifactId);

    if (!fetchedArtifact) {
        throw new Error("Nie znaleziono artefaktu")
    }
    return fetchedArtifact;
}

export async function modifyArtefact(artifactId: Types.ObjectId, updatedData: Partial<Artifact>): Promise<Artifact> {
    const updatedArtifact = await updateArtifact(artifactId, updatedData);

    if(!updatedArtifact) {
        throw new Error("Zjebałeś");
    }

    return updatedArtifact;
}

export async function removeArtifact(artifactId: Types.ObjectId): Promise<Artifact> {
    const deletedArtifact = await deleteArtifact(artifactId);

    if (!deletedArtifact) {
        throw new Error("Nie znaleziono artefaktu")
    }
    return deletedArtifact;
}