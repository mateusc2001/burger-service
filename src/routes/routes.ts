import { Router } from 'express';
import { ItemModelMapper } from '../mapper/item-model.mapper';
import { ItemResponseMapper } from '../mapper/item-response.mapper';
import { ItemRepository } from '../repository/item.repository';
class Routes {
    public route = Router();

    constructor() {

        this.route.get('/itens', async (req, res) => {
            const comImagem: boolean = !!req.query.imagem;
            const itensResponse = (await ItemRepository.getItens())
                .map(item => ItemResponseMapper.mapTo(item, comImagem));

            res.json(itensResponse);
        });

        this.route.post('/itens', async (req, res) => {
            const itemModel = ItemModelMapper.mapTo(req.body);
            const itemResponse = ItemResponseMapper.mapTo(await ItemRepository.addItem(itemModel));
            res.json(itemResponse);
        });

        this.route.put('/item/promocao', async (req, res) => {
            const itemEditModel = ItemModelMapper.mapTo(req.body);
            res.json(await ItemRepository.editItem(itemEditModel));
        });
    }
}

export default new Routes().route