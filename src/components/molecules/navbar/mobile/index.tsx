import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Box } from '@andideve/ds-react';

import { NAVBAR_HEIGHTS } from '../../../../config/globals';

import { MenuItemProps } from './types';

export type { MenuItemProps };

const Anchor = Box.withComponent('a');

export function Humberger({ state }: { state?: 'open' | 'closed' }) {
  const topVariants = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 },
  };

  const bottomVariants = {
    open: { rotate: -45, y: -5 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
    >
      <motion.line x1="3" y1="6" x2="21" y2="6" animate={state} variants={topVariants} />
      <motion.line x1="3" y1="18" x2="21" y2="18" animate={state} variants={bottomVariants} />
    </svg>
  );
}

Humberger.defaultProps = { state: undefined };

export function MenuItem({ Frame, to, label }: MenuItemProps) {
  const router = useRouter();
  const active = router.asPath === to;

  return (
    <Box as="li" h={NAVBAR_HEIGHTS} className="p-relative d-flex items-center">
      <Frame>
        <Link href={to} passHref>
          <Anchor
            aria-current={active ? 'page' : undefined}
            className={clsx(active && 'active', 'nav-link font-medium overlay--after')}
          >
            {label}
          </Anchor>
        </Link>
      </Frame>
    </Box>
  );
}
