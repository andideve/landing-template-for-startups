import Logo from '../components/atoms/icons/Logo';

import { siteMetadata } from '../_data/app/site-metadata';
import { siteMenu } from '../_data/app/site-menu';
import { footerLinks } from '../_data/app/footer-links';
import { socialLinks } from '../_data/app/social-links';

import { SITE_PATHS } from './globals';

import { UIConfig } from '../types/default';

export const uiConfig: UIConfig = {
  navbar: {
    brand: { Logo, name: siteMetadata.title },
    menu: siteMenu,
    cta: {
      label: 'Sign up',
      to: SITE_PATHS.SIGN_UP,
    },
    menuPosition: 'right',
  },
  footer: {
    brand: { Logo, description: siteMetadata.description },
    copy: '© 2020 Open PRO. All rights reserved.',
    links: footerLinks,
    socials: socialLinks,
  },
};
