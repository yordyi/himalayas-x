declare module 'next-sanity' {
  export const groq: (strings: TemplateStringsArray, ...values: any[]) => string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
}

export interface PortableTextBlock {
  _type: 'block'
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    href?: string
  }>
  style?: string
}

export interface PreviewValue {
  title?: string
  subtitle?: string
  media?: unknown
  status?: string
} 