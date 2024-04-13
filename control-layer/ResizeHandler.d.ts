import { BoxSize } from '@/app/libs/design-core';
import { FC } from 'react';
import { Direction, EdgeDirection } from '../types';
export declare const HANDLER_SIZE = 16;
interface ResizeHandlerProps {
    top?: number;
    left?: number;
    right?: number;
    boxSize: BoxSize;
    width?: number | string;
    height?: number | string;
    isActive: boolean;
    bottom?: number;
    rotate: number;
    direction: EdgeDirection;
    onResizeStart: (e: TouchEvent | MouseEvent, direction: Direction) => void;
}
declare const ResizeHandler: FC<ResizeHandlerProps>;
export default ResizeHandler;
