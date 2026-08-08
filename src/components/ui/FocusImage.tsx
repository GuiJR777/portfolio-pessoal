import { m, useInView, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';

interface FocusImageProps {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  alt: string;
  width: number;
  height: number;
  active?: boolean;
  eager?: boolean;
  className?: string;
  sizes?: string;
}

export function FocusImage({
  src,
  webpSrc,
  avifSrc,
  alt,
  width,
  height,
  active = true,
  eager = false,
  className,
  sizes,
}: FocusImageProps) {
  const ref = useRef<HTMLPictureElement>(null);
  const inView = useInView(ref, { once: true, margin: '20% 0px' });
  const reducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const sharp = Boolean(reducedMotion || (inView && loaded && active));

  return (
    <m.picture
      ref={ref}
      className={className}
      initial={false}
      animate={{
        opacity: sharp ? 1 : active ? 0.78 : 0.65,
        scale: sharp ? 1 : 1.03,
        filter: sharp ? 'none' : active ? 'blur(14px)' : 'blur(2px)',
      }}
      transition={{ duration: reducedMotion ? 0.01 : 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {avifSrc && <source srcSet={avifSrc} sizes={sizes} type="image/avif" />}
      {webpSrc && <source srcSet={webpSrc} sizes={sizes} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
      />
    </m.picture>
  );
}
