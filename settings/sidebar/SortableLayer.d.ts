import { LayerComponentProps } from '@lidojs/design-core';
import React, { FC, HTMLProps } from 'react';
import { Layer } from '../../types';
type Props = HTMLProps<HTMLDivElement> & {
    layer: Layer<LayerComponentProps>;
    onOpenOption: (e: React.MouseEvent) => void;
};
declare const SortableLayer: FC<Props>;
export default SortableLayer;
