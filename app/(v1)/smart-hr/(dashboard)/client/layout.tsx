import "@/styles/tailwind.css"
import "@/styles/slick.css"
import "./dashboard.css"

import { Metadata } from "next"

import Header from './components/header'
import Footer from './components/footer'
import LeftSide from './components/leftside'

export const metadata: Metadata = {
  title: 'Client Area',
  description: 'Client Area Of Smart HR'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header/>
      <LeftSide/>
      {children}
      <Footer/>
    </>
  );
}