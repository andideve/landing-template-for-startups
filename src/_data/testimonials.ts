import { PUBLIC_PATHS } from '../config/globals';

const review =
  "Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don&spo;t know how I functioned without it before.";

export const testimonials = [
  {
    name: 'Anastasia Dan',
    stuff: 'UX Board',
    review,
    images: [{ width: 48, url: `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}avatars/avatar-01.png` }],
  },
  {
    name: 'Roman Level',
    stuff: 'AppName',
    review,
    images: [{ width: 48, url: `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}avatars/avatar-02.png` }],
  },
  {
    name: 'Akex Sackett',
    stuff: 'Reform Layouts',
    review,
    images: [{ width: 48, url: `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}avatars/avatar-03.png` }],
  },
];
