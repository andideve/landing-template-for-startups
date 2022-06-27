const fontPaths = [
  '/assets/fonts/Inter-Regular.woff',
  '/assets/fonts/Inter-Regular.woff2',
  '/assets/fonts/Inter-Medium.woff',
  '/assets/fonts/Inter-Medium.woff2',
  '/assets/fonts/Inter-SemiBold.woff',
  '/assets/fonts/Inter-SemiBold.woff2',
  '/assets/fonts/Inter-Bold.woff',
  '/assets/fonts/Inter-Bold.woff2',
  '/assets/fonts/Inter-ExtraBold.woff',
  '/assets/fonts/Inter-ExtraBold.woff2',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return fontPaths.map((fontPath) => ({
      source: fontPath,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=604800',
        },
      ],
    }));
  },
};

module.exports = nextConfig;
