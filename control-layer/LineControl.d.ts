/// <reference types="react" />
import { BoxSize, Delta } from '@lidojs/design-core';
import { ChangeLineCallback } from '../types';
interface LineControlProps {
    boxSize: BoxSize;
    position: Delta;
    scale?: number;
    rotate: number;
    locked: boolean;
    disabled: {
        rotate: boolean;
    };
    onChangeStart?: ChangeLineCallback;
    onRouteStart: (e: TouchEvent | MouseEvent) => void;
}
declare const _default: import("react").ForwardRefExoticComponent<LineControlProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
