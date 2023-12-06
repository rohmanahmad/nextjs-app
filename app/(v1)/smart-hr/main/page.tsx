import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Smart HR',
  description: 'HR Solution For Your Bussiness'
}

export default function MainLandingPage({ Component, pageProps }) {
  return <Component {...pageProps} />
}