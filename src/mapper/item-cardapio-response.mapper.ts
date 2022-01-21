import { Builder } from "builder-pattern";
import { ItemCardapioModel } from "../model/item-cardapio.model";
import { ItemCardapioResponse } from "../model/response/item-cardapio.response";

export class ItemCardapioResponseMapper {

    public static mapToList(itens: ItemCardapioModel[], comImagem: boolean = false): ItemCardapioResponse[] {
        return itens.map(item => this.mapTo(item, comImagem));
    }
    
    public static mapTo(itemCardapioModel: ItemCardapioModel, comImagem: boolean = false): ItemCardapioResponse {
        console.log(`========${itemCardapioModel.positionImage}`);
        return Builder<ItemCardapioResponse>()
            .id(itemCardapioModel.id)
            .valor(itemCardapioModel.valor)
            .imagem(!comImagem ? itemCardapioModel.imagem : null)
            .descricao(itemCardapioModel.descricao)
            .complemento(itemCardapioModel.complemento)
            .positionImage(itemCardapioModel.positionImage)
            .build();
    }
}