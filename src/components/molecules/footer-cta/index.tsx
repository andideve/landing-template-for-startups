import React from 'react';
import { Box, Button, Input, media } from '@andideve/ds-react';
import clsx from 'clsx';

const Form = Box.withComponent('form');

export function FormInlineSubscribe({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Form
      className={clsx(['d-flex', className])}
      sx={{
        '--shadow-default': 'hsl(240deg, 100%, 78%)',
        '--shadow-focus': 'hsl(240deg, 100%, 100%)',
        flexDirection: 'column',
        gap: 'calc(var(--base-space) * .5)',
        [media('lg')]: { flexDirection: 'row' },
      }}
    >
      {children}
    </Form>
  );
}

FormInlineSubscribe.defaultProps = { children: undefined, className: undefined };

export function InputSubscribe(props: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>) {
  return (
    <Input
      type="text"
      variant="filled"
      $size="lg"
      colors={{
        initial: {
          border: 'var(--shadow-default)',
          placeholder: 'hsl(240deg, 100%, 84%)',
          background: 'hsl(240deg, 58%, 55%)',
        },
        hovered: { border: 'var(--shadow-focus)' },
        focus: { border: 'var(--shadow-focus)' },
      }}
      {...props}
    />
  );
}

export function ButtonSubscribe(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      type="button"
      variant="unstyled"
      size="lg"
      colors={{
        initial: {
          foreground: 'var(--color-primary)',
          background: 'var(--color-white)',
        },
        hovered: {
          foreground: 'var(--color-primary-hovered)',
        },
        focus: {
          border: 'var(--color-white)',
          foreground: 'var(--color-primary-hovered)',
        },
      }}
      {...props}
    />
  );
}
