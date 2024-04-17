import { LayerComponentProps } from '@lidojs/design-core';
import { FC } from 'react';
import { Layer } from '../../../types';
interface ReverseTransformLayerProps {
    layer: Layer<LayerComponentProps>;
    hiddenChild?: boolean;
}
declare const ReverseTransformLayer: FC<ReverseTransformLayerProps>;
export default ReverseTransformLayer;
