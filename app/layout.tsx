import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import {Toaster} from 'sonner'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { animations } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LaughTale',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{baseTheme:dark}}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider 
            attribute='class'
            storageKey='laugh-tale'
          >
            <Toaster dir='ltr' closeButton theme='light' position='bottom-right' />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
