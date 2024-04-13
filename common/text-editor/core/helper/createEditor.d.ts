import { EditorProps } from 'prosemirror-view';
import { TextEditor } from '../../interfaces';
export declare const createEditor: ({ content, ele, handleDOMEvents, }: {
    content: string;
    ele?: HTMLDivElement | null;
    handleDOMEvents?: EditorProps['handleDOMEvents'];
}) => TextEditor;
export declare const useCreateEditor: () => (data: {
    content: string;
    ele?: HTMLDivElement | null;
    handleDOMEvents?: EditorProps['handleDOMEvents'];
}) => TextEditor;
