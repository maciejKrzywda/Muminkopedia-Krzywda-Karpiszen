import { CharacterModel, Artifact } from '../models/Character.model';
import { Types } from "mongoose"


export const createCharacter = async (characterData: Artifact): Promise<Artifact> => {
    const newCharacter = new CharacterModel(characterData);
    return await newCharacter.save();
};

export const findAllCharacters = async (): Promise<Artifact[]> => {
    return await CharacterModel.find();
};

export const updateCharacter = async (characterId : Types.ObjectId, characterBody : Partial<Artifact>): Promise<Artifact | null> => {
    return await CharacterModel.findByIdAndUpdate(characterId, characterBody);
};

export const deleteCharacter = async (characterId : Types.ObjectId): Promise<Artifact | null> => {
    return await CharacterModel.findByIdAndDelete(characterId);
};