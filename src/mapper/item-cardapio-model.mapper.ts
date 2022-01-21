import { Builder } from "builder-pattern";
import { ItemCardapioModel } from "../model/item-cardapio.model";
import { ItemCardapioRequest } from "../model/request/item-cardapio.request";

export class ItemCardapioModelMapper {

    public static mapToList(itens: ItemCardapioRequest[], comImagem: boolean = false): ItemCardapioModel[] {
        return itens.map(item => this.mapTo(item, comImagem));
    }

    public static mapTo(itemCardapioRequest: ItemCardapioRequest, comImagem: boolean = false): ItemCardapioModel {
        return Builder<ItemCardapioModel>()
            .id(itemCardapioRequest.id)
            .valor(itemCardapioRequest.valor)
            .imagem(!comImagem ? itemCardapioRequest.imagem : null)
            .descricao(itemCardapioRequest.descricao)
            .complemento(itemCardapioRequest.complemento)
            .positionImage(itemCardapioRequest.positionImage)
            .build();
    }
}