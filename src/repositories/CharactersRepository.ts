import { CharacterModel, Character } from '../models/Character.model';
import { Types } from "mongoose"


export const createCharacter = async (characterData: Character): Promise<Character> => {
    const newCharacter = new CharacterModel(characterData);
    return await newCharacter.save();
};

export const findAllCharacters = async (): Promise<Character[]> => {
    return await CharacterModel.find();
};

export const updateCharacter = async (characterId : Types.ObjectId, characterBody : Partial<Character>): Promise<Character | null> => {
    return await CharacterModel.findByIdAndUpdate(characterId, characterBody);
};

export const deleteCharacter = async (characterId : Types.ObjectId): Promise<Character | null> => {
    return await CharacterModel.findByIdAndDelete(characterId);
};