import React from 'react';
import clsx from 'clsx';
import { Box, media } from '@andideve/ds-react';

import { InlineStackProps } from './types';

const getRootSpace = ({ y, x }: { y?: string; x?: string }) => ({
  y: `calc(-1 * ${y})`,
  x: `calc(-1 * ${x})`,
});

function InlineStack({ children, y, x, as, lg, centered, ...rest }: InlineStackProps) {
  const rootSpace = {
    _: getRootSpace({ y, x }),
    2: lg && getRootSpace(lg),
  };
  return (
    <Box
      mt={{ _: rootSpace._.y, 2: rootSpace[2]?.y }}
      ml={{ _: rootSpace._.x, 2: rootSpace[2]?.x }}
      {...rest}
    >
      <Box
        as={as}
        className={clsx(centered && 'items-center justify-center', 'inline-list')}
        sx={{
          '& > *': { marginTop: y, marginLeft: x },
          [media('lg')]: {
            '& > *': { marginTop: lg?.y, marginLeft: lg?.x },
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export { InlineStack };
export default InlineStack;
