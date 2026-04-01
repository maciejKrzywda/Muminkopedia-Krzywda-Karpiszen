import mongoose, {Document, Types} from "mongoose"

export interface Artifacts extends Document {
    name: string;
    description: string;
    property: string;
    owner: Types.ObjectId;
}

const ArtifactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    property: {type: String, required: true},
    owner: {type: Types.ObjectId, required: true},
})

export default mongoose.model<Artifacts>('Artifacts', ArtifactSchema)
