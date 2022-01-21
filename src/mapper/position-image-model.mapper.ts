import { Builder } from "builder-pattern";
import { PositionImageModel } from "../model/position-image.model";

export class PositionImageModelMapper {

    public static mapTo(positionImagem: any): PositionImageModel {
        return Builder<PositionImageModel>()
            .x(positionImagem.x)
            .y(positionImagem.y)
            .build();
    }
}