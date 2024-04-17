import { BoxData, CursorPosition } from '@lidojs/design-core';
import { CornerDirection } from '../../types';
export declare const useResizeImage: ({ getData, onResizeStart, onResize, onResizeEnd, lockAspect, }: {
    getData: () => BoxData;
    onResizeStart: (e: MouseEvent | TouchEvent, direction: CornerDirection) => void;
    onResize: (data: BoxData, direction: CornerDirection, oldPos: CursorPosition, newPos: CursorPosition) => void;
    onResizeEnd?: (data: BoxData) => void;
    lockAspect?: boolean;
}) => {
    startResize: (e: MouseEvent | TouchEvent, direction: CornerDirection) => void;
};
