import React from 'react';
import { MenuPositions } from '../containers/organisms/navbar/desktop/types';

export type Menu = { to: string; label: string };
export type Link = { label: string; url: string; external?: boolean };

export interface LinksSection {
  title: string;
  items: Link[];
}

export interface SocialLink {
  link: string;
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
}

export interface UIConfig {
  navbar: {
    brand: {
      Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
      name: string;
    };
    menu: Menu[];
    cta: {
      label: string;
      to: string;
    };
    menuPosition: MenuPositions;
  };
  footer: {
    brand: {
      Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
      description: string;
    };
    copy: string;
    links: LinksSection[];
    socials: SocialLink[];
  };
}
