import { PositionImageModel } from "../position-image.model";

export class ItemCardapioResponse {
    constructor(
        public id: string,
        public imagem: string,
        public descricao: string,
        public valor: number,
        public complemento: string,
        public positionImage: PositionImageModel
    ) {}
}