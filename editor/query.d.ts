import { LayerComponentProps, LayerId } from '@/app/libs/design-core';
import { EditorState, Layer } from '../types';
export declare const QueryMethods: (state: EditorState) => {
    getPageSize(): import("@/app/libs/design-core").BoxSize;
    serialize(): import("@/app/libs/design-core").SerializedPage[];
    getLayers(pageIndex: number): import("../types").Layers;
    getLayer<P extends LayerComponentProps>(pageIndex: number, layerId: LayerId): Layer<P>;
};
