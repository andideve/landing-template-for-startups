import type { NextPage } from 'next';
import React from 'react';
import styled from '@emotion/styled';
import { Container, ButtonAnchor, AspectRatio } from '@andideve/ds-react';

import Page, { Section } from '../containers/templates/Page';

import { ServiceList, ServiceItem } from '../containers/organisms/service-item';
import { SolutionList, SolutionItem } from '../containers/organisms/solution-item';
import { TestimonialList, TestimonialItem } from '../containers/organisms/testimonial-item';

import HeroHead from '../components/molecules/hero-head';
import HeroBody from '../components/molecules/hero-body';
import SectionHead from '../components/molecules/section-head';
import OverlayBackground from '../components/molecules/overlay-bg';

import Play from '../components/atoms/icons/Play';

import { PUBLIC_PATHS, SECTION_SPACE } from '../config/globals';

import { siteMetadata } from '../_data/app/site-metadata';
import { services } from '../_data/services';
import { solutions } from '../_data/solution';
import { testimonials } from '../_data/testimonials';

// Components

const IntroVideoButton = styled.button`
  --size: 5.5rem;
  --i-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  background-image: linear-gradient(
    213.57deg,
    hsla(204, 33%, 94%, 0.8) 14.42%,
    hsla(204, 33%, 94%, 1) 84.52%
  );
  box-shadow: 0px 1rem 2rem hsla(210deg, 9%, 9%, 0.24);
  svg {
    width: var(--i-size);
    height: var(--i-size);
  }
`;

IntroVideoButton.defaultProps = { type: 'button' };

// Containers

const heroButtons = (
  <>
    <ButtonAnchor variant="filled" colorScheme="primary" size="lg" href="#start-free-trial">
      Start free trial
    </ButtonAnchor>
    <ButtonAnchor
      variant="unstyled"
      size="lg"
      href="#learn-more"
      colors={{
        initial: {
          foreground: 'var(--color-white)',
          background: 'hsl(214deg, 6%, 21%)',
        },
        hovered: { background: 'hsl(214deg, 6%, 18%)' },
        focus: {
          border: 'hsl(214deg, 6%, 18%)',
          background: 'hsl(214deg, 6%, 18%)',
        },
      }}
    >
      Learn more
    </ButtonAnchor>
  </>
);

const heroIntroVideo = (
  <div className="p-relative">
    <OverlayBackground
      bottom="-4vw"
      left="-7.8125vw"
      width="35.1875vw"
      height="34.4375vw"
      images={[
        {
          width: 563,
          height: 551,
          url: `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}hero-bottom-left-bg.svg`,
        },
      ]}
    />

    <AspectRatio ratio={1024 / 576} className="bg-color-black">
      <img
        alt="intro video thumbnail"
        src={`${PUBLIC_PATHS.BASE_IMAGE_ASSETS}intro-video-thumb.webp`}
      />

      <div className="overlay d-flex items-center justify-center">
        <IntroVideoButton aria-label="Play video">
          <Play />
        </IntroVideoButton>
      </div>
    </AspectRatio>
  </div>
);

const hero = (
  <>
    <Container maxWidth="md" className="text-center">
      <HeroHead
        pt={SECTION_SPACE}
        title={siteMetadata.title}
        description="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
      />
    </Container>
    <HeroBody className="text-center" button={heroButtons} introVideo={heroIntroVideo} />
  </>
);

const sections = {
  service: (
    <Section pt={`calc(${SECTION_SPACE} * .8)`}>
      <Container maxWidth="md">
        <SectionHead
          className="text-center"
          title="Build up the whole picture"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis."
        />
      </Container>
      <ServiceList>
        {services.map((service, i) => (
          <ServiceItem
            key={i}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </ServiceList>
    </Section>
  ), // service
  solution: (
    <Section>
      <Container maxWidth="md">
        <SectionHead
          className="text-center"
          title="One product, unlimited solutions"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla."
        />
      </Container>
      <SolutionList>
        {solutions.map((solution, i) => (
          <SolutionItem
            key={i}
            reverse={i % 2 === 0}
            category={solution.category}
            title={solution.title}
            description={solution.description}
            bulletPoints={solution.bulletPoints}
            images={solution.images}
          />
        ))}
      </SolutionList>
    </Section>
  ), // solution
  testimonial: (
    <Section>
      <Container maxWidth="md">
        <SectionHead
          className="text-center"
          title="Don't take our word for it"
          description="Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."
        />
      </Container>
      <TestimonialList>
        {testimonials.map((testimonial, i) => (
          <TestimonialItem
            key={i}
            name={testimonial.name}
            stuff={testimonial.stuff}
            review={testimonial.review}
            images={testimonial.images}
          />
        ))}
      </TestimonialList>
    </Section>
  ),
};

const Home: NextPage = () => (
  <Page hero={hero} heroMax>
    {sections.service}
    {sections.solution}
    {sections.testimonial}
  </Page>
);

export default Home;
