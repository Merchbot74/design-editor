import { LayerId } from '@lidojs/design-core';
import { FC, PropsWithChildren } from 'react';
type LayerElementProps = {
    id: LayerId;
};
declare const LayerElement: FC<PropsWithChildren<LayerElementProps>>;
export default LayerElement;
