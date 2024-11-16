import type { PortableTextBlock, SanityImage } from './sanity'

export interface Author {
  name: string
  image?: {
    alt?: string
    url: string
  }
}

export interface Category {
  title: string
  slug: string
}

export interface BlogPost {
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  mainImage?: SanityImage
  body?: PortableTextBlock[]
  author?: {
    name: string
    image?: SanityImage
  }
  categories?: Array<{
    title: string
    slug: string
  }>
} 