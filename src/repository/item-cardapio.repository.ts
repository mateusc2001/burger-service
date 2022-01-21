import { ItemCardapioModel } from "../model/item-cardapio.model";
import { ItemModel } from "../model/item.model";
import { itemCardapioData } from "../schemas/item-cardapio.schema";

export class ItemCardapioRepository {

    public static getItens(): any {
        return itemCardapioData.find();
    }

    public static addItem(newItem: ItemCardapioModel): Promise<ItemCardapioModel> {
        return itemCardapioData.create(newItem);
    }

    public static editItem(newItem: ItemCardapioModel): any {
        return itemCardapioData.updateOne({ _id: newItem.id}, newItem);
    }

    public static delete(itemId: String): any {
        return itemCardapioData.deleteOne({ _id: itemId});
    }
}