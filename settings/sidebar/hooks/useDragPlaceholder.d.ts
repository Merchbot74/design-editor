import { useSortable } from '@dnd-kit/sortable';
import { CSSObject } from '@emotion/react';
export declare const useDragPlaceholder: (sortableProps?: ReturnType<typeof useSortable>) => {
    css: CSSObject;
    contentCss: CSSObject;
};
