import { Router } from 'express';
import { ItemCardapioModelMapper } from '../mapper/item-cardapio-model.mapper';
import { ItemCardapioResponseMapper } from '../mapper/item-cardapio-response.mapper';
import { ItemCardapioRepository } from '../repository/item-cardapio.repository';
class CardapioRoute {
    public route = Router();

    constructor() {

        this.route.get('/item', async (req, res) => {
            const comImagem: boolean = !!req.query.imagem;
            const itensResponse = ItemCardapioResponseMapper.mapToList(await ItemCardapioRepository.getItens(), comImagem);

            res.json(itensResponse);
        });

        this.route.post('/item', async (req, res) => {
            const itemModel = ItemCardapioModelMapper.mapTo(req.body);
            const itemResponse = ItemCardapioResponseMapper.mapTo(await ItemCardapioRepository.addItem(itemModel));
            res.json(itemResponse);
        });

        this.route.put('/item', async (req, res) => {
            const itemEditModel = ItemCardapioModelMapper.mapTo(req.body);
            res.json(await ItemCardapioRepository.editItem(itemEditModel));
        });

        this.route.delete('/item/:id', async (req, res) => {
            const idItem = req.params.id;
            res.json(await ItemCardapioRepository.delete(idItem));
        });
    }
}

export default new CardapioRoute().route