import { Schema } from 'prosemirror-model';
import { Command } from 'prosemirror-state';
export declare function buildKeyMap(schema: Schema, mapKeys?: {
    [key: string]: false | string;
}): {
    [key: string]: Command;
};
