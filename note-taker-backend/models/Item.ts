import mongoose, {Document, Schema} from 'mongoose';

const Item = new Schema({
    name: {type: String, required: true, unique: false}, // Name of the item
    description: {type: String, required: true, unique: false}, // Description of the item
    worlds: {type: [String], required: true, unique: false}, // Worlds the item exists in
    campaigns: {type: [String], required: true, unique: false} // Campaigns the item has appeared in
});


export interface IItem extends Document {
    title: string, // Name of the item
    description: string, // Description of the item
    campaigns: string[] // Campaigns the item has appeared in
}

export default mongoose.model<IItem>('Item', Item);