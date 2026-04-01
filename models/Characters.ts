import mongoose, {Document, Types} from "mongoose"

export interface Characters extends Document {
    bestFriend: Types.ObjectId;
    name: string;
    description: string;
    species: string;
    status: boolean;
}

const MoominSchema = new mongoose.Schema({
    bestFriend: {type: Types.ObjectId, required: false},
    name: {type: String, required: true},
    description: {type: String, required: false},
    species: {type: String, required: true},
    status: {type: Boolean, default: false},

})

export default mongoose.model<Characters>('Characters', MoominSchema)