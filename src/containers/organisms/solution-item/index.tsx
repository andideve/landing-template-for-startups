import React from 'react';
import { AspectRatio, Box, GridContainer, H3, media, Paragraph, Text } from '@andideve/ds-react';
import clsx from 'clsx';

import { SECTION_SPACE } from '../../../config/globals';

export function SolutionList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyle: 'none',
        'li:not(:first-of-type)': { marginTop: SECTION_SPACE },
      }}
    >
      {children}
    </Box>
  );
}

function SolutionItemGrid({
  text,
  image,
  reverse,
}: {
  text: React.ReactNode;
  image: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <GridContainer
      className={clsx([reverse && 'SolutionItemGrid--reversed', 'SolutionItemGrid'])}
      sx={{
        '.SolutionItemGrid__Column': { gridColumn: '1/-1' },
        '.SolutionItemGrid__Column--image': { marginBottom: `calc(${SECTION_SPACE} / 2)` },
        [media('lg')]: {
          columnGap: 'calc(var(--base-space) * 4)',
          '.SolutionItemGrid__Column': { gridColumn: 'auto/span 6', margin: 'auto 0' },
          '&.SolutionItemGrid--reversed .SolutionItemGrid__Column--image': {
            gridColumn: '7/span 6',
            gridRowStart: 1,
          },
          '&.SolutionItemGrid--reversed .SolutionItemGrid__Column--text': {
            gridColumn: '1/span 6',
          },
        },
      }}
    >
      <div className="SolutionItemGrid__Column SolutionItemGrid__Column--image">{image}</div>
      <div className="SolutionItemGrid__Column SolutionItemGrid__Column--text">{text}</div>
    </GridContainer>
  );
}

SolutionItemGrid.defaultProps = { reverse: undefined };

export function SolutionItem({
  category,
  title,
  description,
  bulletPoints,
  images,
  reverse,
}: {
  category: string;
  title: string;
  description: string;
  bulletPoints: string[];
  images: { width: number; url: string }[];
  reverse?: boolean;
}) {
  const text = (
    <div className="Solution__Text">
      <header>
        <Text size="xl" className="color-primary">
          {category}
        </Text>
        <H3 className="Solution__Text__Heading font-bold">
          <span style={{ fontSize: '1.066666em' }}>{title}</span>
        </H3>
      </header>
      <Paragraph size="xl" className="color-secondary">
        {description}
      </Paragraph>
      <ul className="Solution__Text__BulletPoints">
        {bulletPoints.map((point, i) => (
          <Text as="li" key={i} size="lg" className="color-secondary">
            {point}
          </Text>
        ))}
      </ul>
    </div>
  );

  const image = (
    <AspectRatio ratio={540 / 405} className="bg-color-card">
      {images.length ? (
        <img
          alt={title}
          width={images[0].width}
          src={images[0].url}
          srcSet={images.map((img) => `${img.url} ${img.width}w`).toString()}
        />
      ) : null}
    </AspectRatio>
  );

  return (
    <Box
      as="li"
      sx={{
        '--base-space': '1rem',
        '.Solution__Text__Heading': { margin: 'calc(var(--base-space) * .5) 0' },
        '.Solution__Text__BulletPoints': {
          marginTop: 'var(--base-space)',
          'li:not(:first-of-type)': { marginTop: 'calc(var(--base-space) * .5)' },
        },
      }}
    >
      <SolutionItemGrid text={text} image={image} reverse={reverse} />
    </Box>
  );
}

SolutionItem.defaultProps = { reverse: undefined };
