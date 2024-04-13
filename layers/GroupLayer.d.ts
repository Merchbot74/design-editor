import { LayerComponentProps } from '@/app/libs/design-core';
import { PropsWithChildren } from 'react';
import { LayerComponent } from '../types';
export interface GroupLayerProps extends LayerComponentProps {
    scale: number;
}
declare const GroupLayer: LayerComponent<PropsWithChildren<GroupLayerProps>>;
export default GroupLayer;
