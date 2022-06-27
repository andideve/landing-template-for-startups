import React from 'react';
import { Menu } from '../../../../types/default';

export interface MenuItemProps extends Menu {
  Frame: React.FunctionComponent<React.HTMLAttributes<HTMLElement>>;
}
