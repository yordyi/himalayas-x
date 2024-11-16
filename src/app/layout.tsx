import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Himalayas X',
    default: 'Himalayas X - AI-Powered Legal Assistant',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Himalayas X Legal Tech Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased p-4 bg-gray-100">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-xl">
          {children}
        </div>
      </body>
    </html>
  )
}
