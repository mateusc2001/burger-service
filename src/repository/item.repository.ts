import { ItemModel } from "../model/item.model";
import { itemPromocaoData } from "../schemas/item-promocao.schema";

export class ItemRepository {

    public static getItens(): Promise<ItemModel[]> {
        return itemPromocaoData.find()
            .exec();
    }

    public static addItem(newItem: ItemModel): Promise<ItemModel> {
        return itemPromocaoData.create(newItem);
    }

    public static editItem(newItem: ItemModel): any {
        delete newItem.imagem;
        console.log(newItem);
        return itemPromocaoData.updateOne({ _id: newItem.id}, newItem);
    }
}