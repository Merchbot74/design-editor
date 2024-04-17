import { LayerId } from 'design-core';
import { EditorActions, EditorState } from '../../types';
export declare const duplicate: (state: EditorState, { pageIndex, layerIds, actions, }: {
    pageIndex: number;
    layerIds: LayerId[];
    actions: EditorActions;
}) => void;
