import { BoxSize, Delta, ImageContentProps } from 'design-core';
import { LayerComponent } from '../types';
export interface ImageLayerProps extends ImageContentProps {
    image: {
        url: string;
        thumb: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
        transparency?: number;
    };
}
declare const ImageLayer: LayerComponent<ImageLayerProps>;
export default ImageLayer;
