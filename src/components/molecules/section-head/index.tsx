import React from 'react';
import { Box, BoxProps, H2, Paragraph } from '@andideve/ds-react';

import { SECTION_SPACE } from '../../../config/globals';

const Header = Box.withComponent('header');

function SectionHead({
  className,
  title,
  description,
  ...rest
}: {
  title: string;
  description?: string;
  className?: string;
} & Omit<BoxProps, 'children' | 'sx'>) {
  return (
    <Header
      mb={SECTION_SPACE}
      className={className}
      sx={{
        '--base-space': '1rem',
        '.SectionHead__Description': { marginTop: 'var(--base-space)' },
      }}
      {...rest}
    >
      <H2 className="font-extrabold">
        <span style={{ fontSize: '1.11111em' }}>{title}</span>
      </H2>
      {description && (
        <Paragraph size="xl" className="SectionHead__Description color-secondary">
          {description}
        </Paragraph>
      )}
    </Header>
  );
}

SectionHead.defaultProps = { description: undefined, className: undefined };

export { SectionHead };
export default SectionHead;
