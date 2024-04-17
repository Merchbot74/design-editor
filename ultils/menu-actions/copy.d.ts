import { LayerId } from '@lidojs/design-core';
import { EditorState } from '../../types';
export declare const copy: (state: EditorState, { pageIndex, layerIds }: {
    pageIndex: number;
    layerIds: LayerId[];
}) => Promise<void>;
