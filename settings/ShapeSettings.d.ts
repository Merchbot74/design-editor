import { FC } from 'react';
import { ShapeLayerProps } from '../layers/ShapeLayer';
import { Layer } from '../types';
interface ShapeSettingsProps {
    layers: Layer<ShapeLayerProps>[];
}
declare const ShapeSettings: FC<ShapeSettingsProps>;
export default ShapeSettings;
