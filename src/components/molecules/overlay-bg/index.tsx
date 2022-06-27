import React from 'react';
import { AspectRatio } from '@andideve/ds-react';

export default function OverlayBackground({
  images,
  top,
  right,
  bottom,
  left,
  width,
  height,
  zIndex,
}: {
  width: string | number;
  height: string | number;
  images: { width: number; height: number; url: string }[];
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
}) {
  if (!images.length) return null;
  const image = images[0];
  return (
    <div className="p-absolute" style={{ top, right, bottom, left, width, height, zIndex }}>
      <AspectRatio ratio={image.width / image.height}>
        <img
          alt="overlay background"
          src={image.url}
          srcSet={images.map((img) => `${img.url} ${img.width}w`).toString()}
        />
      </AspectRatio>
    </div>
  );
}

OverlayBackground.defaultProps = {
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined,
  zIndex: undefined,
};
