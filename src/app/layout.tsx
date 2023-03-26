import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toast'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import MobileMenu from '@/components/MobileMenu'
import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: "Similarity Scout Free API",
  description: "With the Similarity Scout API, you can easily determine the similarity between two pieces of text with a free API key.",
  colorScheme: 'dark',
  creator: 'Hunter Macias',
  image: 'https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100', 
  icons: {
    icon: 'https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100',
    shortcut: 'https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100',
    apple: 'https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100',
    other: {
      rel: 'sim-scout-image',
      url: 'https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100',
    },
  },
  icon: 'https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100',
  twitter: {
    card: 'summary_large_image',
    title: 'Similarity Scout Free API',
    description: "With the Similarity Scout API, you can easily determine the similarity between two pieces of text with a free API key.",
    siteId: '1467726470533754880',
    creator: 'Hunter Macias',
    creatorId: '1467726470533754880',
    images: ['https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}>

      <head>
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:card" content={metadata.twitter.description} />
      </head>


      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position='bottom-right' />

          <MobileMenu />

          <main>{children}</main>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className='h-40 md:hidden' />
      </body>
      
    </html>
  )
}
