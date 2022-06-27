import React from 'react';
import { AspectRatio, Box, GridContainer, Paragraph } from '@andideve/ds-react';

import OverlayBackground from '../../../components/molecules/overlay-bg';

import { PUBLIC_PATHS } from '../../../config/globals';

export function TestimonialList({ children }: { children: React.ReactNode }) {
  return (
    <GridContainer
      as="ul"
      sx={{
        '--base-space': '1rem',
        listStyle: 'none',
        gap: 'calc(var(--base-space) * 1.5)',
        li: { gridColumn: 'auto/span 4' },
      }}
    >
      {children}
    </GridContainer>
  );
}

export function TestimonialItem({
  name,
  stuff,
  review,
  images,
}: {
  name: string;
  stuff: string;
  review: string;
  images: { width: number; url: string }[];
}) {
  return (
    <Box
      as="li"
      className="bg-color-card"
      sx={{
        '--base-space': '1rem',
        '--px': 'calc(var(--base-space) * 2)',
        '.Testimonial__Avatar': { marginBottom: 'var(--base-space)' },
        '.Testimonial__Divider': { margin: '0 var(--px)' },
      }}
    >
      <Box p="calc(var(--base-space) * 2) var(--px)">
        <div className="p-relative" style={{ maxWidth: '3rem' }}>
          <AspectRatio
            ratio={1}
            className="Testimonial__Avatar rounded-full overflow-hidden bg-color-card"
          >
            {images.length ? (
              <img
                alt={name}
                width={images[0].width}
                src={images[0].url}
                srcSet={images.map((img) => `${img.url} ${img.width}w`).toString()}
              />
            ) : null}
          </AspectRatio>

          <OverlayBackground
            top={0}
            right="-.75rem"
            width={24}
            height={18}
            images={[{ width: 24, height: 18, url: `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}quote.svg` }]}
          />
        </div>
        <Paragraph
          as="blockquote"
          size="lg"
          className="color-secondary"
          sx={{ '&:before': { content: '"— "' } }}
        >
          {review}
        </Paragraph>
      </Box>

      <hr className="Testimonial__Divider divider" />

      <Box p="calc(var(--base-space) * 1.25) var(--px)">
        <p className="font-medium">
          {name}&nbsp;
          <span className="font-regular" style={{ color: 'var(--color-border)' }}>
            /
          </span>
          &nbsp;
          <span className="color-primary">{stuff}</span>
        </p>
      </Box>
    </Box>
  );
}
