import { Schema, model } from 'mongoose'
import { ItemModel } from '../model/item.model';

const itemSchema = new Schema({
    imagem: { type: String, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    positionImage: {
        x: { type: Number, required: false, default: 0 },
        y: { type: Number, required: false, default: 0 }
    }
}, {
    timestamps: true
})

itemSchema.set('toJSON', {
    virtuals: true
});

export const itemPromocaoData = model<ItemModel>('itens', itemSchema);