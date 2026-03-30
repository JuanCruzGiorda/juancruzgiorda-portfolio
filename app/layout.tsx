import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/context/theme-context'
import { LanguageProvider } from '@/context/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Juan Cruz Giorda | Systems Engineering Student',
  description: 'Software Developer & Systems Engineering Student. Especializado en desarrollo web, backend, frontend y aplicaciones con IA.',
  keywords: ['Software Developer', 'Web Development', 'React', 'Next.js', 'AI', 'Argentina'],
  authors: [{ name: 'Juan Cruz Giorda' }],
  icons: {
    icon: [
      {
        url: '/favicon.png?v=1',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico?v=1',
        sizes: '16x16',
      },
    ],
    apple: '/apple-touch-icon.png?v=1',
    shortcut: '/favicon.ico?v=1',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
