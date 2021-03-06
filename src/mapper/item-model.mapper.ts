import { Builder } from "builder-pattern";
import { ItemModel } from "../model/item.model";
import { ItemRequest } from "../model/request/item.request";

export class ItemModelMapper {
    public static mapTo(itemRequest: ItemRequest): ItemModel {
        return Builder<ItemModel>()
            .id(itemRequest.id)
            .descricao(itemRequest.descricao)
            .imagem(itemRequest.imagem)
            .valor(itemRequest.valor)
            .positionImage(itemRequest.positionImage)
            .build();
    }
}