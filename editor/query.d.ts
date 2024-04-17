import { LayerComponentProps, LayerId } from 'design-core';
import { EditorState, Layer } from '../types';
export declare const QueryMethods: (state: EditorState) => {
    getPageSize(): import("design-core").BoxSize;
    serialize(): import("design-core").SerializedPage[];
    getLayers(pageIndex: number): import("../types").Layers;
    getLayer<P extends LayerComponentProps>(pageIndex: number, layerId: LayerId): Layer<P>;
};
