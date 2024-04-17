import { BoxSize, Delta, FrameContentProps } from 'design-core';
import { LayerComponent } from '../types';
export interface FrameLayerProps extends FrameContentProps {
    image: {
        url: string;
        thumb: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
    } | null;
}
declare const FrameLayer: LayerComponent<FrameLayerProps>;
export default FrameLayer;
