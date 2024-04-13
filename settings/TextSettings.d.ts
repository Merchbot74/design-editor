import { FC } from 'react';
import { TextLayerProps } from '../layers/TextLayer';
import { Layer } from '../types';
interface TextSettingsProps {
    layers: Layer<TextLayerProps>[];
}
declare const TextSettings: FC<TextSettingsProps>;
export default TextSettings;
