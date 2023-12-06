'use client'

import {Suspense} from 'react'

import "@/styles/tailwind.css"
import "@/styles/slick.css"
import Loading from './loading';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}