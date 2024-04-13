import { BoxSize, Delta } from '@/app/libs/design-core';
import React from 'react';
interface TransformLayerProps {
    boxSize: BoxSize;
    rotate: number;
    position: Delta;
    transparency?: number;
}
declare const _default: React.ForwardRefExoticComponent<TransformLayerProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
