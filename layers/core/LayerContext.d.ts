import { LayerId } from 'design-core';
import React, { FC, PropsWithChildren } from 'react';
export declare const LayerContext: React.Context<{
    id: LayerId;
}>;
type LayerProviderProps = {
    id: LayerId;
};
declare const LayerProvider: FC<PropsWithChildren<LayerProviderProps>>;
export default LayerProvider;
