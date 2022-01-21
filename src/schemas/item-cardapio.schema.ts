import { Schema, model } from 'mongoose'
import { ItemCardapioModel } from '../model/item-cardapio.model';
import { ItemModel } from '../model/item.model';

const itemCardapioSchema = new Schema({
    imagem: { type: String, required: false },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    complemento: { type: String, required: true },
    positionImage: {
        x: { type: Number, required: false, default: 0 },
        y: { type: Number, required: false, default: 0 }
    }
}, {
    timestamps: true
})

itemCardapioSchema.set('toJSON', {
    virtuals: true
});

export const itemCardapioData = model<ItemCardapioModel>('itensCartapio', itemCardapioSchema);