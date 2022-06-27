import React from 'react';
import styled from '@emotion/styled';
import { Box, GridContainer, Paragraph } from '@andideve/ds-react';

const ServiceIcon = styled.div<{ size?: string }>`
  --size: ${({ size = '4rem' }) => size};
  --i-size: calc(var(--size) * 0.3125);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  background-color: var(--color-primary);
  svg {
    width: var(--i-size);
    height: var(--i-size);
  }
`;

export function ServiceList({ children }: { children: React.ReactNode }) {
  return (
    <GridContainer
      as="ul"
      sx={{
        '--base-space': '1rem',
        listStyle: 'none',
        gap: 'calc(var(--base-space) * 4)',
        li: { gridColumn: 'auto/span 4' },
      }}
    >
      {children}
    </GridContainer>
  );
}

export function ServiceItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactElement;
}) {
  return (
    <Box
      as="li"
      className="text-center"
      sx={{
        '--base-space': '1rem',
        '.Service__Icon': { marginBottom: 'var(--base-space)' },
        '.Service__Description': { marginTop: 'calc(var(--base-space) * .5)' },
      }}
    >
      <ServiceIcon className="Service__Icon">{icon}</ServiceIcon>
      <Paragraph as="h3" size="2xl" className="font-bold">
        {title}
      </Paragraph>
      <Paragraph size="lg" className="Service__Description color-secondary">
        {description}
      </Paragraph>
    </Box>
  );
}
