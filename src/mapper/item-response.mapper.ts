import { Builder } from "builder-pattern";
import { ItemModel } from "../model/item.model";
import { ItemResponse } from "../model/response/item.response";

export class ItemResponseMapper {
    public static mapTo(itemModel: ItemModel): ItemResponse {
        return Builder<ItemResponse>()
            .id(itemModel.id)
            .descricao(itemModel.descricao)
            .imagem(itemModel.imagem)
            .valor(itemModel.valor)
            .build();
    }
}