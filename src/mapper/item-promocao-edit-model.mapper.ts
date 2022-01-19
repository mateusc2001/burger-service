import { Builder } from "builder-pattern";
import { ItemPromocaoEditModel } from "../model/item-promocao-edit.model";
import { ItemPromocaoEditRequest } from "../model/request/item-promocao-edit.request";

export class ItemPromocaoEditModelMapper {

    public static mapTo(item: ItemPromocaoEditRequest): ItemPromocaoEditModel {
        return Builder<ItemPromocaoEditModel>()
            .id(item.id)
            .valor(item.valor)
            .imagem(item.imagem)
            .descricao(item.descricao)
            .build();

    }
}