import './globals.css'

import { Suspense } from 'react'

export const metadata = {
  title: 'Title',
  description: 'Desc',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full bg-gray-50'>
      <body className='h-full'>{children}</body>
    </html>
  )
}
