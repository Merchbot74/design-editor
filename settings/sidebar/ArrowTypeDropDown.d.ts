import { ArrowType } from 'design-core';
import { FC } from 'react';
type Props = {
    position?: 'start' | 'end';
    value: ArrowType;
    onChange: (v: ArrowType) => void;
};
declare const ArrowTypeDropDown: FC<Props>;
export default ArrowTypeDropDown;
