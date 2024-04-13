import { FC } from 'react';
import { LinePosition } from '../types';
export declare const HANDLER_CORNER_SIZE = 16;
interface LineHandlerProps {
    isActive?: boolean;
    position: LinePosition;
    onChange: (e: TouchEvent | MouseEvent, position: LinePosition) => void;
}
declare const LineHandler: FC<LineHandlerProps>;
export default LineHandler;
