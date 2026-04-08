import {model, Schema, Document, Types} from "mongoose"

export interface Artifact extends Document {
    bestFriend: Types.ObjectId;
    name: string;
    description: string;
    species: string;
    status: boolean;
}

const moominSchema = new Schema<Artifact>({
    bestFriend: {type: Types.ObjectId, required: false},
    name: {type: String, required: true},
    description: {type: String, required: false},
    species: {type: String, required: true},
    status: {type: Boolean, default: false},
})

export const CharacterModel =  model<Artifact>('Character', moominSchema)