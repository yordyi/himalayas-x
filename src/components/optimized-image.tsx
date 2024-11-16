import Image from 'next/image'
import { imageSizes } from '@/lib/images'

interface OptimizedImageProps {
  src: string
  alt: string
  type: keyof typeof imageSizes
  className?: string
}

export function OptimizedImage({ src, alt, type, className }: OptimizedImageProps) {
  const { width, height } = imageSizes[type]

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      quality={90}
      unoptimized={src.startsWith('data:') || src.startsWith('blob:')}
    />
  )
} 