import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { DefaultSeo, NextSeo } from 'next-seo';

import { siteMetadata } from '../../_data/app/site-metadata';

interface HeadProps {
  title: string;
  description?: string;
}

export default function Head({ title, description = siteMetadata.description }: HeadProps) {
  const router = useRouter();
  return (
    <NextHead>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <link
        rel="preload"
        href="/assets/fonts/Inter-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-Medium.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-SemiBold.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-SemiBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-Bold.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-ExtraBold.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/Inter-ExtraBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <DefaultSeo
        canonical={`${siteMetadata.url}${router.asPath}`}
        defaultTitle={siteMetadata.title}
        description={siteMetadata.description}
        openGraph={{
          title: siteMetadata.title,
          description: siteMetadata.description,
          type: 'website',
          site_name: siteMetadata.title,
        }}
      />

      <NextSeo title={title} description={description} />
    </NextHead>
  );
}

Head.defaultProps = { description: undefined };
