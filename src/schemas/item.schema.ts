import { Schema, model } from 'mongoose'
import { ItemModel } from '../model/item.model';

const itemSchema = new Schema({
    imagem: { type: String, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true }
}, {
    timestamps: true
})

itemSchema.set('toJSON', {
    virtuals: true
});

export const itemData = model<ItemModel>('itens', itemSchema);