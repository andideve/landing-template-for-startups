import React from 'react';
import { Box, BoxProps, H1, Paragraph } from '@andideve/ds-react';

const Header = Box.withComponent('header');

function HeroHead({
  title,
  description,
  ...rest
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
} & Omit<BoxProps, 'sx' | 'title' | 'children'>) {
  return (
    <Header
      mb="calc(var(--base-space) * 2)"
      sx={{
        '--base-space': '1rem',
        '.HeroHead__Description': { marginTop: 'var(--base-space)' },
      }}
      {...rest}
    >
      <H1 className="font-extrabold">
        <span style={{ fontSize: '1.083333em' }}>{title}</span>
      </H1>
      {description && (
        <Paragraph size="xl" className="HeroHead__Description color-secondary">
          {description}
        </Paragraph>
      )}
    </Header>
  );
}

HeroHead.defaultProps = { description: undefined };

export { HeroHead };
export default HeroHead;
