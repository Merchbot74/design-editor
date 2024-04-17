import { LayerComponentProps, LayerId } from '@lidojs/design-core';
import { EditorState, Layer } from '../types';
export declare const QueryMethods: (state: EditorState) => {
    getPageSize(): import("@lidojs/design-core").BoxSize;
    serialize(): import("@lidojs/design-core").SerializedPage[];
    getLayers(pageIndex: number): import("../types").Layers;
    getLayer<P extends LayerComponentProps>(pageIndex: number, layerId: LayerId): Layer<P>;
};
