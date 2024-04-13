import { FC } from 'react';
import { LineLayerProps } from '../layers';
import { Layer } from '../types';
interface ShapeSettingsProps {
    layers: Layer<LineLayerProps>[];
}
declare const LineSettings: FC<ShapeSettingsProps>;
export default LineSettings;
