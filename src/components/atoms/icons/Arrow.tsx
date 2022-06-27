import React from 'react';

export type ArrowDirections = 'up' | 'right' | 'down' | 'left' | 'top-right';

export interface ArrowOptions {
  direction?: ArrowDirections;
}

const defaults: Required<ArrowOptions> = {
  direction: 'down',
};

const svgTransforms: Record<ArrowDirections, React.CSSProperties['transform']> = {
  up: 'rotate(180deg)',
  right: 'rotate(270deg)',
  down: 'rotate(0)',
  left: 'rotate(90deg)',
  'top-right': 'rotate(225deg)',
};

function Arrow({
  direction = defaults.direction,
  style,
  ...rest
}: // eslint-disable-next-line react/require-default-props
{ direction?: ArrowDirections } & React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-down"
      style={{ transform: `${svgTransforms[direction]} scale(1.2)`, ...style }}
      {...rest}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export default Arrow;
