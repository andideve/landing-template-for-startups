import React from 'react';
import { Box, BoxProps } from '@andideve/ds-react';

export default function HeroBody({
  button,
  introVideo,
  ...rest
}: {
  button: React.ReactNode;
  introVideo?: React.ReactNode;
} & Omit<BoxProps, 'children' | 'sx'>) {
  return (
    <Box
      sx={{
        '--base-space': '1rem',
        '.HeroBody__Button': {
          marginTop: 'calc(var(--base-space) * 2)',
          'a:not(:first-of-type), button:not(:first-of-type)': {
            marginLeft: 'calc(var(--base-space) * .75)',
          },
        },
        '.HeroBody__IntroVideo': { margin: 'calc(var(--base-space) * 4) 0' },
      }}
      {...rest}
    >
      <div className="HeroBody__Button">{button}</div>
      {introVideo && <div className="HeroBody__IntroVideo">{introVideo}</div>}
    </Box>
  );
}

HeroBody.defaultProps = { introVideo: undefined };
