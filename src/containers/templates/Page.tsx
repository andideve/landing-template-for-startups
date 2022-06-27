import Link from 'next/link';
import React, { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import useRootClose from 'react-overlays/useRootClose';
import {
  Container,
  Box,
  BoxProps,
  ButtonAnchor,
  ButtonSizes,
  IconButton,
  GridContainer,
  media,
  H2,
  Paragraph,
} from '@andideve/ds-react';

import Head from './Head';

import Navbar from '../organisms/navbar/desktop';
import { Drawer, DrawerElementType, MMenu, BottomMenu } from '../organisms/navbar/mobile';
import Footer from '../organisms/footer';

import { Humberger } from '../../components/molecules/navbar/mobile';
import OverlayBackground from '../../components/molecules/overlay-bg';
import {
  FormInlineSubscribe,
  InputSubscribe,
  ButtonSubscribe,
} from '../../components/molecules/footer-cta';

import Arrow from '../../components/atoms/icons/Arrow';

import useTransition from '../../hooks/use-transition';

import { PUBLIC_PATHS, SECTION_SPACE, NAVBAR_HEIGHTS } from '../../config/globals';
import { uiConfig } from '../../config/ui-config';

import { siteMetadata } from '../../_data/app/site-metadata';

const Article = styled.article();

const DRAWER_ANIMATE_MS = 100;

const HEAD_PX = '8vw';
const BODY_PX = `calc(${HEAD_PX} + 2.5vw)`;

const FOOT_PY = `calc(${SECTION_SPACE} * 0.8)`;
const FOOT_PX = BODY_PX;

const NavFrame = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${HEAD_PX};
  height: ${NAVBAR_HEIGHTS};
`;

const FootFrame = styled.div`
  padding: ${FOOT_PY} ${FOOT_PX};
`;

const MMenuFrame = styled.div`
  padding: 0 ${BODY_PX};
`;

type SectionFrameProps = BoxProps;

function SectionFrame({ children, ...rest }: SectionFrameProps) {
  return (
    <Box py={SECTION_SPACE} px={BODY_PX} {...rest}>
      {children}
    </Box>
  );
}

export function Section({ children, as = 'section', ...rest }: SectionFrameProps) {
  return (
    <SectionFrame as={as} {...rest}>
      <Container>{children}</Container>
    </SectionFrame>
  );
}

function CTAButton({ size = 'md' }: { size?: ButtonSizes }) {
  return (
    <Link href={uiConfig.navbar.cta.to} passHref>
      <ButtonAnchor
        variant="filled"
        colorScheme="primary"
        size={size}
        iconRight={<Arrow direction="right" />}
      >
        {uiConfig.navbar.cta.label}
      </ButtonAnchor>
    </Link>
  );
}

CTAButton.defaultProps = { size: undefined };

const footerCTA = (
  <Box
    p="calc(var(--base-space) * 4) calc(var(--base-space) * 3)"
    sx={{
      '--base-space': '1rem',
      color: 'var(--color-primary-contrast)',
      backgroundColor: 'var(--color-primary)',
      '.SubscribeGrid': { gap: 'calc(var(--base-space) * 2.5)' },
      '.Subscribe__Description': { marginTop: 'calc(var(--base-space) * .5)' },
    }}
  >
    <GridContainer
      className="SubscribeGrid"
      sx={{
        '[class^=SubscribeGrid__Column]': {
          gridColumn: '1/-1',
          margin: 'auto 0',
        },
        [media('lg')]: {
          '.SubscribeGrid__Column--header': { gridColumn: '1/span 6' },
          '.SubscribeGrid__Column--form': { gridColumn: '8/span 5' },
        },
      }}
    >
      <div className="SubscribeGrid__Column--header">
        <H2 size="h3" className="font-bold">
          <span style={{ fontSize: '1.066666em' }}>Stay in the loop</span>
        </H2>
        <Paragraph
          size="lg"
          className="Subscribe__Description"
          sx={{ color: 'hsl(242deg, 100%, 94%)' }}
        >
          Join our newsletter to get top news before anyone else.
        </Paragraph>
      </div>
      <div className="SubscribeGrid__Column--form">
        <FormInlineSubscribe>
          <InputSubscribe placeholder="Your best email..." />
          <ButtonSubscribe type="submit">Subscribe</ButtonSubscribe>
        </FormInlineSubscribe>
      </div>
    </GridContainer>
  </Box>
);

const footer = (
  <Footer
    append={
      <Box mt={SECTION_SPACE} px={FOOT_PX}>
        <Container>{footerCTA}</Container>
      </Box>
    }
    Frame={FootFrame}
    brand={{ Logo: uiConfig.footer.brand.Logo, description: uiConfig.footer.brand.description }}
    links={uiConfig.footer.links}
    socials={uiConfig.footer.socials}
    copy={uiConfig.footer.copy}
  />
);

interface PageProps {
  children?: React.ReactNode;
  type?: 'article';
  title?: string;
  description?: string;
  hero?: React.ReactNode;
  heroMax?: true;
}

export default function Page({ children, type, title, description, hero, heroMax }: PageProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerRef = useRef<DrawerElementType>(null);
  const drawerState = useTransition({ showing: drawerOpen, ms: DRAWER_ANIMATE_MS });

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((s) => !s);
  }, []);
  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  useRootClose(drawerRef, closeDrawer);

  const fullTitle = title ? `${title} — ${siteMetadata.title}` : siteMetadata.title;

  const drawer = (
    <div ref={drawerRef}>
      <IconButton
        variant="unstyled"
        size="xl"
        aria-label={drawerOpen ? 'close drawer' : 'open drawer'}
        onClick={toggleDrawer}
        className="focus-visible"
        sx={{ '--i-size': 'inherit', marginRight: '-1rem' }}
      >
        <Humberger state={drawerOpen ? 'open' : 'closed'} />
      </IconButton>
      {drawerState !== 'closed' && (
        <Drawer offsetTop={NAVBAR_HEIGHTS} state={drawerState} transitionMs={DRAWER_ANIMATE_MS}>
          <MMenu items={uiConfig.navbar.menu} Frame={MMenuFrame} />
          <BottomMenu px={BODY_PX}>
            <CTAButton size="lg" />
          </BottomMenu>
        </Drawer>
      )}
    </div>
  );

  const MainInner = type === 'article' ? Article : React.Fragment;

  return (
    <>
      <Head title={fullTitle} description={description} />

      <ButtonAnchor
        href="#main"
        className="p-absolute"
        sx={{
          top: 4,
          left: '-100%',
          zIndex: 1000,
          '&:focus-visible': { left: 4 },
        }}
      >
        Skip to content
      </ButtonAnchor>

      <OverlayBackground
        zIndex={-1}
        top={`calc(-17.625vw + ${HEAD_PX})`}
        right={`calc(-18vw + ${HEAD_PX})`}
        width="45.625vw"
        height="37.9375vw"
        images={[
          { width: 730, height: 607, url: `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}top-right-bg.svg` },
        ]}
      />

      <header>
        <Navbar
          Frame={NavFrame}
          brand={{ Logo: uiConfig.navbar.brand.Logo, name: uiConfig.navbar.brand.name }}
          menuItems={uiConfig.navbar.menu}
          cta={<CTAButton />}
          drawer={drawer}
          menuPosition={uiConfig.navbar.menuPosition}
        />
      </header>

      <main id="main">
        <MainInner>
          {hero && (
            <SectionFrame {...(heroMax ? { py: 0 } : {})}>
              <Box
                className={heroMax && 'hero-max d-flex items-center justify-center'}
                sx={{ '&.hero-max': { minHeight: `calc(100vh - ${NAVBAR_HEIGHTS})` } }}
              >
                <Container>{type === 'article' ? hero : <section>{hero}</section>}</Container>
              </Box>
            </SectionFrame>
          )}

          {children}
        </MainInner>
      </main>

      {footer}
    </>
  );
}

Page.defaultProps = {
  children: undefined,
  type: undefined,
  title: undefined,
  description: undefined,
  hero: undefined,
  heroMax: undefined,
};
