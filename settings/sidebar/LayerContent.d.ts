import { DraggableSyntheticListeners } from '@dnd-kit/core';
import { CSSObject } from '@emotion/react';
import { LayerComponentProps } from 'design-core';
import React, { HTMLProps } from 'react';
import { Layer } from '../../types';
type Props = HTMLProps<HTMLDivElement> & {
    layer: Layer<LayerComponentProps>;
    onOpenOption?: (e: React.MouseEvent) => void;
    listeners?: DraggableSyntheticListeners;
    extraCSS?: CSSObject;
};
declare const _default: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default _default;
