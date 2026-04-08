// to jest CharacterService.ts - to robi service

import {Artifact} from "../models/Character.model";
import {
    createCharacter,
    deleteCharacter,
    findAllCharacters,
    updateCharacter
} from "../repositories/CharactersRepository";
import {Types} from "mongoose";

export async function addCharacter(characterData: Artifact): Promise<Artifact> {
    if(!characterData.bestFriend || !characterData.name || !characterData.description || !characterData.species || !characterData.status) {
        throw new Error("Wszystkie pola wymagane (bestFriennd, name, description, status)")
    }
        return await createCharacter(characterData);
}

export async function fetchCharacter(): Promise<Artifact[]> {
    return await findAllCharacters();
}

export async function modifyCharacter(characterId: Types.ObjectId, updatedData: Partial<Artifact>): Promise<Artifact> {
    const updatedCharacter = await updateCharacter(characterId, updatedData);

    if(!updatedCharacter) {
        throw new Error("Zjebałeś");
    }

    return updatedCharacter;
}

export async function removeCharacter(characterId: Types.ObjectId): Promise<Artifact> {
    const deletedCharacter = await deleteCharacter(characterId);

    if (!deletedCharacter) {
        throw new Error("Nie znaleziono postaci")
    }
    return deletedCharacter;
}