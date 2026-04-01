import {model, Schema, Document, Types} from "mongoose"

export interface Artifact extends Document {
    name: string;
    description: string;
    property: string;
    owner: Types.ObjectId;
}

const artifactSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    property: {type: String, required: true},
    owner: {type: Types.ObjectId, required: true},
})

export const ArtifactModel =  model<Artifact>('Artifact', artifactSchema)