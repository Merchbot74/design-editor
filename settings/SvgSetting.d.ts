import { FC } from 'react';
import { SvgLayerProps } from '../layers/SvgLayer';
import { Layer } from '../types';
interface SvgSettingsProps {
    layer: Layer<SvgLayerProps>;
}
declare const SvgSettings: FC<SvgSettingsProps>;
export default SvgSettings;
