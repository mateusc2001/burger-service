import { ItemPromocaoEditModel } from "../model/item-promocao-edit.model";
import { ItemModel } from "../model/item.model";
import { itemData } from "../schemas/item.schema";

export class ItemRepository {

    public static getItens(): Promise<ItemModel[]> {
        return itemData.find()
            .exec();
    }

    public static addItem(newItem: ItemModel): Promise<ItemModel> {
        return itemData.create(newItem);
    }

    public static editItem(newItem: ItemPromocaoEditModel): any {
        return itemData.updateOne({ _id: newItem.id}, newItem);
    }
}