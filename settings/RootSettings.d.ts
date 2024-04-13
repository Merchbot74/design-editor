import { FC } from 'react';
import { RootLayerProps } from '../layers/RootLayer';
import { Layer } from '../types';
interface RootSettingsProps {
    layer: Layer<RootLayerProps>;
}
declare const RootSettings: FC<RootSettingsProps>;
export default RootSettings;
