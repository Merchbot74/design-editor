import { NodeType } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
export declare const isNodeActive: (state: EditorState, typeOrName: NodeType | string | null, attributes?: Record<string, unknown>) => boolean;
