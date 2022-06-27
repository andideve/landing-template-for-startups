import Link from 'next/link';
import React from 'react';
import { CSSObject } from '@emotion/styled';
import clsx from 'clsx';
import {
  Container,
  ContainerSizes,
  GridContainer,
  Box,
  Paragraph,
  Text,
  IconAnchor,
  media,
} from '@andideve/ds-react';

import { Brand, BrandProps } from '../../../components/molecules/navbar/desktop';
import InlineStack from '../../../components/molecules/inline-stack';

import { Link as LinkType, SocialLink } from '../../../types/default';

const Anchor = Text.withComponent('a');

function BrandNLinksGrid({
  className,
  brand,
  links,
}: {
  brand: React.ReactNode;
  links?: React.ReactNode;
  className?: string;
}) {
  return (
    <GridContainer
      className={className}
      sx={{
        '[class^=BrandNLinksGrid__Column]': { gridColumn: '1/-1' },
        [media('lg')]: {
          '.BrandNLinksGrid__Column--brand': { gridColumn: '1/span 4' },
          '.BrandNLinksGrid__Column--links': { gridColumn: '6/-1' },
        },
      }}
    >
      <div className="BrandNLinksGrid__Column--brand">{brand}</div>
      {links && <div className="BrandNLinksGrid__Column--links">{links}</div>}
    </GridContainer>
  );
}

function CopyNSocialLinks({
  className,
  copy,
  social,
}: {
  copy: React.ReactNode;
  social: React.ReactNode;
  className?: string;
}) {
  return (
    <Box
      d={{ _: 'block', 2: 'flex' }}
      className={clsx('items-center', className)}
      sx={{
        '.CopyNSocialLinks--copy > *:not(:first-of-type)': {
          marginTop: 'calc(var(--base-space) * .25)',
        },
        '.CopyNSocialLinks--social-links': { marginTop: 'calc(var(--base-space) * 1.5)' },
        [media('lg')]: {
          justifyContent: 'space-between',
          '.CopyNSocialLinks--social-links': {
            marginTop: 0,
            marginLeft: 'calc(var(--base-space) * 1.5)',
          },
        },
      }}
    >
      <div className="CopyNSocialLinks--copy">{copy}</div>
      <div className="CopyNSocialLinks--social-links">{social}</div>
    </Box>
  );
}

BrandNLinksGrid.defaultProps = { className: undefined, links: undefined };
CopyNSocialLinks.defaultProps = { className: undefined };

function LinkHeading({ children }: { children: string }) {
  return (
    <Paragraph as="h2" size="sm" mb="calc(var(--base-space) * .25)" className="font-medium">
      {children}
    </Paragraph>
  );
}

function LinkList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyle: 'none',
        'li:not(:first-of-type)': { marginTop: 'calc(var(--base-space) * .25)' },
      }}
    >
      {children}
    </Box>
  );
}

function LinkItem({ label, url, external }: LinkType) {
  return (
    <li>
      <Link href={url} passHref>
        <Anchor
          size="sm"
          className="color-secondary--hoverable"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </Anchor>
      </Link>
    </li>
  );
}

function FooterLinks({
  className,
  sections,
}: {
  sections: { title: string; items: LinkType[] }[];
  className?: string;
}) {
  return (
    <Box
      className={clsx('inline-list', className)}
      sx={{
        gap: 'calc(var(--base-space) * 1.5)',
        section: { flexGrow: 1 },
      }}
    >
      {sections.map((section, a) => (
        <section key={a}>
          <header>
            <LinkHeading>{section.title}</LinkHeading>
          </header>
          <LinkList>
            {section.items.map((item, b) => (
              <LinkItem key={b} label={item.label} url={item.url} external={item.external} />
            ))}
          </LinkList>
        </section>
      ))}
    </Box>
  );
}

FooterLinks.defaultProps = { className: undefined };

const containerCSS: CSSObject = {
  '--base-space': '1rem',
  '--row-mt': 'calc(var(--base-space) * 3.25)',
  '& > [class*=Footer__Row]:not(:first-of-type), .Footer__Row--BrandNLinksGrid__FooterLinks': {
    marginTop: 'var(--row-mt)',
  },
  '.Brand__Description': { marginTop: 'calc(var(--base-space) * .875)' },
  [media('lg')]: {
    '.Footer__Row--BrandNLinksGrid__FooterLinks': { marginTop: 0 },
  },
};

function FooterRow({ children }: { children: React.ReactNode }) {
  return <div className="Footer__Row">{children}</div>;
}

function Footer({
  append = null,
  Frame,
  containerSize,
  brand,
  links,
  socials,
  copy,
}: {
  brand: BrandProps & { description: string };
  links: { title: string; items: LinkType[] }[];
  copy: string;
  socials: SocialLink[];
  append?: React.ReactNode;
  Frame?: React.FunctionComponent;
  containerSize?: ContainerSizes;
}) {
  const FootFrame = Frame || React.Fragment;

  const row1 = (
    <FooterRow>
      <BrandNLinksGrid
        brand={
          <div>
            <Brand Logo={brand.Logo} />
            <Paragraph className="Brand__Description color-secondary">
              {brand.description}
            </Paragraph>
          </div>
        }
        links={
          links.length ? (
            <FooterLinks className="Footer__Row--BrandNLinksGrid__FooterLinks" sections={links} />
          ) : null
        }
      />
    </FooterRow>
  );

  const row2 = (
    <FooterRow>
      <CopyNSocialLinks
        copy={copy.split(/\n/).map((string, i) => (
          <Paragraph key={i} size="sm" className="color-secondary">
            {string}
          </Paragraph>
        ))}
        social={
          <section>
            <header>
              <h2 className="sr-only">social links</h2>
            </header>
            <InlineStack as="ul" y="1rem" x="1rem" sx={{ listStyle: 'none' }}>
              {socials.map((social, i) => (
                <li key={i}>
                  <IconAnchor
                    title={social.label}
                    variant="unstyled"
                    size="sm"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    colors={{
                      initial: { background: 'var(--color-card)' },
                      focus: { border: 'var(--color-primary)' },
                    }}
                    sx={{ borderRadius: 999 }}
                  >
                    <social.icon />
                  </IconAnchor>
                </li>
              ))}
            </InlineStack>
          </section>
        }
      />
    </FooterRow>
  );

  return (
    <footer>
      {append}
      <FootFrame>
        <Container maxWidth={containerSize} sx={containerCSS}>
          {row1}
          {row2}
        </Container>
      </FootFrame>
    </footer>
  );
}

Footer.defaultProps = { append: undefined, Frame: undefined, containerSize: undefined };

export default Footer;
