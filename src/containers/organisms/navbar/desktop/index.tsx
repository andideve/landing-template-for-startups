import React from 'react';
import { Container, ContainerSizes, Box, BoxProps, media } from '@andideve/ds-react';

import { Brand, BrandProps, MenuItem } from '../../../../components/molecules/navbar/desktop';

import { Menu } from '../../../../types/default';
import { MenuPositions } from './types';

export type { MenuPositions };

const Nav = Box.withComponent('nav');

function MenuList({ children }: { children: React.ReactNode }) {
  const spacing = 'calc(var(--base-space, 1rem) * 1.5)';
  return (
    <Box
      as="ul"
      className="inline-list"
      sx={{
        '--item-px': `calc(${spacing} / 2)`,
        '--negative-mx': 'calc(-1 * var(--item-px))',
        margin: '0 var(--negative-mx)',
        li: { paddingRight: 'var(--item-px)', paddingLeft: 'var(--item-px)' },
      }}
    >
      {children}
    </Box>
  );
}

export function DMenu({ items }: { items: Menu[] }) {
  return (
    <MenuList>
      {items.map((menu) => (
        <MenuItem key={menu.to} label={menu.label} to={menu.to} />
      ))}
    </MenuList>
  );
}

function Navbar({
  Frame: _Frame,
  cta,
  drawer,
  brand,
  menuItems,
  containerSize,
  menuPosition = 'right',
  baseSpace = '1rem',
  ...rest
}: {
  Frame?: React.FunctionComponent;
  cta?: React.ReactElement;
  drawer?: React.ReactNode;
  brand: BrandProps;
  menuItems: Menu[];
  containerSize?: ContainerSizes;
  menuPosition?: MenuPositions;
  baseSpace?: string;
} & BoxProps) {
  const Frame = _Frame || React.Fragment;

  const containers = {
    brand: (
      <div className="Content__Brand">
        <Brand {...brand} />
      </div>
    ),
    menu: (
      <div className="Content__DMenu">
        <DMenu items={menuItems} />
      </div>
    ),
    drawer: drawer && <div className="Content__Drawer">{drawer}</div>,
    cta: cta && <div className="Content__DCTA">{cta}</div>,
  };

  const content = (
    <Box
      className="Content d-flex items-center justify-between"
      sx={`
        --base-space: ${baseSpace};
        --DMenu-mx: calc(var(--base-space) * 3);
        .Content__DMenu { display: none; margin: 0 var(--DMenu-mx); }
        .Content__Drawer { display: block; }
        .Content__DCTA { display: none; }
        ${media('lg')} {
          .Content__DMenu { display: block; }
          .Content__Drawer { display: none; }
          .Content__DCTA { display: block; }
        }
      `}
    >
      {menuPosition === 'left' && (
        <>
          <div className="d-flex items-center">
            {containers.brand}
            {containers.menu}
          </div>
          {containers.drawer}
          {containers.cta}
        </>
      )}
      {menuPosition === 'center' && (
        <>
          {containers.brand}
          {containers.menu}
          {containers.drawer}
          {containers.cta}
        </>
      )}
      {menuPosition === 'right' && (
        <>
          {containers.brand}
          <div className="d-flex items-center">
            {containers.menu}
            {containers.drawer}
            {containers.cta}
          </div>
        </>
      )}
    </Box>
  );

  return (
    <Nav {...rest}>
      <Frame>
        <Container maxWidth={containerSize}>{content}</Container>
      </Frame>
    </Nav>
  );
}

Navbar.defaultProps = {
  Frame: undefined,
  cta: undefined,
  drawer: undefined,
  containerSize: undefined,
  menuPosition: undefined,
  baseSpace: undefined,
};

export { Navbar };
export default Navbar;
