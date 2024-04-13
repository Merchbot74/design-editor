import { FC } from 'react';
import { FrameLayerProps } from '../layers/FrameLayer';
import { Layer } from '../types';
interface FrameSettingsProps {
    layers: Layer<FrameLayerProps>[];
}
declare const FrameSettings: FC<FrameSettingsProps>;
export default FrameSettings;
