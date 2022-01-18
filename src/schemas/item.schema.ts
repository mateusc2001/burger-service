import { Schema, model } from 'mongoose'

const itemSchema = new Schema({
    profileName: { type: String, required: true },
}, {
    timestamps: true
})

itemSchema.set('toJSON', {
    virtuals: true
});

export const itemData = model<any>('itens', itemSchema);