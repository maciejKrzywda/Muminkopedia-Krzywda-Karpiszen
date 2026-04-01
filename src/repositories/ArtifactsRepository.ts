import { ArtifactModel, Artifact } from '../models/Artifact.model';
import { Types } from "mongoose";

export const createArtifact = async (artifactData: Artifact): Promise<Artifact> => {
    const newArtifact = new ArtifactModel(artifactData);
    return await newArtifact.save();
};

export const findAllArtifacts = async (): Promise<Artifact[]> => {
    return await ArtifactModel.find();
};

export const updateArtifact = async (artifactId : Types.ObjectId, artifactBody : Partial<Artifact>): Promise<Artifact | null> => {
    return await ArtifactModel.findByIdAndUpdate(artifactId, artifactBody);
};

export const deleteArtifact = async (artifactId : Types.ObjectId): Promise<Artifact | null> => {
    return await ArtifactModel.findByIdAndDelete(artifactId);
};