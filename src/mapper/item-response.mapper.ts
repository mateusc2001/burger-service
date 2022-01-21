import { Builder } from "builder-pattern";
import { ItemModel } from "../model/item.model";
import { ItemResponse } from "../model/response/item.response";

export class ItemResponseMapper {
    public static mapTo(itemModel: ItemModel, imagem: boolean = false): ItemResponse {
        console.log(`::::::::::${itemModel.positionImage}`);
        return Builder<ItemResponse>()
            .id(itemModel.id)
            .descricao(itemModel.descricao)
            .imagem(!imagem ? itemModel.imagem : null)
            .valor(itemModel.valor)
            .positionImage(itemModel.positionImage)
            .build();
    }
}