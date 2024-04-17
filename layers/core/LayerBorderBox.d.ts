import { BoxSize, Delta, LayerType } from '@lidojs/design-core';
import React from 'react';
interface LayerBorderBoxProps {
    boxSize: BoxSize;
    position?: Delta;
    rotate: number;
    type?: 'dashed' | 'solid';
    layerType?: LayerType;
}
declare const _default: React.ForwardRefExoticComponent<LayerBorderBoxProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
