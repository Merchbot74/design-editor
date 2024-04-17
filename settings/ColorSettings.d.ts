import { GradientStyle } from 'design-core';
import { FC, PropsWithChildren } from 'react';
interface ColorSettingsProps {
    colors: string[];
    gradient?: {
        colors: string[];
        style: GradientStyle;
    } | null;
    useGradient?: boolean;
    onChange: (color: string) => void;
    onChangeGradient?: (gradient: {
        colors: string[];
        style: GradientStyle;
    }) => void;
}
declare const ColorSettings: FC<PropsWithChildren<ColorSettingsProps>>;
export default ColorSettings;
