import React from 'react';

export interface BrandProps {
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name?: string;
}
