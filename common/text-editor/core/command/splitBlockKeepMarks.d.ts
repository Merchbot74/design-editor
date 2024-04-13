import { Attrs, Node, NodeType } from 'prosemirror-model';
import { Command } from 'prosemirror-state';
export declare const splitBlockKeepMarks: Command;
export declare function splitBlockAs(splitNode?: (node: Node, atEnd: boolean) => {
    type: NodeType;
    attrs?: Attrs;
} | null): Command;
