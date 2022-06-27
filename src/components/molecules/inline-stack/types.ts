import { BoxProps } from '@andideve/ds-react';

export interface InlineStackProps extends Omit<BoxProps, 'mt' | 'ml'> {
  y: string;
  x: string;
  lg?: { y?: string; x?: string };
  as?: keyof JSX.IntrinsicElements;
  centered?: boolean;
}
