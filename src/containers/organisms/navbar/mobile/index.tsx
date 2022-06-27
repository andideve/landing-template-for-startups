import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import clsx from 'clsx';
import { Box, BoxElementType, BoxProps, newTransition } from '@andideve/ds-react';

import { MenuItem, MenuItemProps } from '../../../../components/molecules/navbar/mobile';

import { NAVBAR_HEIGHTS } from '../../../../config/globals';

import { Menu } from '../../../../types/default';
import { TransitionState } from '../../../../hooks/use-transition/types';

const MenuList = styled.ul`
  --border-w: 1px;
  list-style: none;
  display: flex;
  flex-direction: column;
  border-top-width: var(--border-w);
  & > li {
    border-bottom-width: var(--border-w);
  }
  &,
  & > li {
    border-color: var(--color-border);
  }
`;

export function MMenu({ items, Frame }: { items: Menu[]; Frame: MenuItemProps['Frame'] }) {
  return (
    <MenuList>
      {items.map((menu, i) => (
        <MenuItem key={i} Frame={Frame} label={menu.label} to={menu.to} />
      ))}
    </MenuList>
  );
}

export function BottomMenu({ children, className, ...rest }: Omit<BoxProps, 'py'>) {
  return (
    <Box py={`calc(${NAVBAR_HEIGHTS} / 2)`} className={clsx('text-center', className)} {...rest}>
      {children}
    </Box>
  );
}

export type DrawerElementType = BoxElementType;

interface DrawerProps {
  children: React.ReactNode;
  transitionMs: number;
  offsetTop?: string;
  state?: TransitionState;
}

export const Drawer = React.forwardRef<DrawerElementType, DrawerProps>(
  ({ children, transitionMs, offsetTop = '0px', state }, ref) => {
    const stateCSS: Record<Extract<TransitionState, 'opening' | 'open'>, CSSObject> = {
      opening: { opacity: 0, transform: 'translateY(-1.5rem)' },
      open: { opacity: 1, transform: 'translateY(0)' },
    };

    return (
      <Box
        ref={ref}
        className={clsx(state, 'overlay p-fixed bg-color-bg')}
        sx={{
          top: offsetTop,
          height: `calc(100vh - ${offsetTop})`,
          overflowY: 'auto',
          backgroundColor: 'var(--color-background)',
          zIndex: 999,
          // transition styles
          transition: `${newTransition(['top', 'transform'], {
            duration: transitionMs,
            easing: 'linear',
          })}, ${newTransition('opacity', { duration: 150 })}`,
          '&, &.opening': stateCSS.opening,
          '&.open': stateCSS.open,
        }}
      >
        {children}
      </Box>
    );
  },
);

Drawer.defaultProps = { offsetTop: undefined, state: undefined };
