import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import clsx from 'clsx';
import { Box, Text, newTransition, media } from '@andideve/ds-react';

import { Menu } from '../../../../types/default';
import { BrandProps } from './types';

export type { BrandProps };

const Anchor = Text.withComponent('a');

export function Brand({ Logo, name }: BrandProps) {
  return (
    <Box
      className={clsx(name && 'hoverable-logo', 'p-relative d-flex items-center')}
      sx={{
        '--logo-bg-hover': 'hsla(0, 0%, 100%, .08)',
        '&.hoverable-logo': {
          '.logo-bg': { transition: newTransition('fill', { duration: 150 }) },
          '&:focus-within .logo-bg': { fill: 'var(--logo-bg-hover)' },
          [media('lg')]: {
            '&:hover .logo-bg': { fill: 'var(--logo-bg-hover)' },
          },
        },
      }}
    >
      <Logo role="img" aria-label="Brand logo" />
      {name && (
        <Link href="/" passHref>
          <Anchor
            aria-label={name}
            ml="1rem"
            size="lg"
            className="font-medium overlay--after"
            sx={{
              color: 'inherit',
              '&:focus': { textDecoration: 'none' },
            }}
          />
        </Link>
      )}
    </Box>
  );
}

export function MenuItem({ label, to }: Menu) {
  const router = useRouter();
  const active = router.asPath === to;
  return (
    <Box as="li" className="p-relative rounded" sx={{ lineHeight: '2.5rem' }}>
      <Link href={to} passHref>
        <Anchor
          aria-current={active ? 'page' : undefined}
          className={clsx(active && 'active', 'nav-link font-medium overlay--after')}
          sx={{ textDecoration: 'none !important' }}
        >
          {label}
        </Anchor>
      </Link>
    </Box>
  );
}
