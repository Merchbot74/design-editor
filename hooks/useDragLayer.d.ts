import { Delta, LayerId } from '@lidojs/design-core';
import { RefObject } from 'react';
export type DragCallbackData = {
    controlBox?: Delta;
    layers: Record<LayerId, Delta>;
};
export declare const useDragLayer: ({ frameRef, pageListRef, }: {
    frameRef: RefObject<HTMLDivElement>;
    pageListRef: RefObject<HTMLDivElement[]>;
}) => {
    onDragStart: (e: TouchEvent | MouseEvent) => void;
};
