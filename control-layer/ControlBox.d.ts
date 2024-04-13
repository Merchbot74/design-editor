/// <reference types="react" />
import { BoxSize, Delta } from '@/app/libs/design-core';
import { ResizeCallback } from '../types';
interface ResizeBoxProps {
    boxSize: BoxSize;
    position: Delta;
    scale?: number;
    rotate: number;
    disabled: {
        vertical: boolean;
        horizontal: boolean;
        corners: boolean;
        rotate: boolean;
        scalable: boolean;
    };
    locked: boolean;
    onResizeStart?: ResizeCallback;
    onRouteStart: (e: TouchEvent | MouseEvent) => void;
}
declare const _default: import("react").ForwardRefExoticComponent<ResizeBoxProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
