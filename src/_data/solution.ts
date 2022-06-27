import { PUBLIC_PATHS } from '../config/globals';

const imgURLs = [
  `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}solution/illustration-01.svg`,
  `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}solution/illustration-02.svg`,
  `${PUBLIC_PATHS.BASE_IMAGE_ASSETS}solution/illustration-03.svg`,
];

export const solutions = imgURLs.map((imgURL) => ({
  category: 'More speed. Less spend',
  title: 'Keep projects on schedule',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  bulletPoints: [
    'Duis aute irure dolor in reprehenderit',
    'Excepteur sint occaecat ',
    'Amet consectetur adipiscing elit',
  ],
  images: [{ width: 540, url: imgURL }],
}));
