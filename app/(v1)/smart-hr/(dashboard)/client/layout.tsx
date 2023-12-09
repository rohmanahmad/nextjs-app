import "@/styles/tailwind-2.css"
import "@/styles/slick.css"
import "./dashboard.css"

import { Metadata } from "next"

import DesktopLeftSide from './components/desktop-leftside'
import MobileLeftside from "./components/mobile-leftside"

export const metadata: Metadata = {
  title: 'Client Area',
  description: 'Client Area Of Smart HR'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 { 'overflow-hidden': isSideMenuOpen }">
      <div
        x-show="isSideMenuOpen"
        x-transitionenter="transition ease-in-out duration-150"
        x-transitionenterstart="opacity-0"
        x-transitionenterend="opacity-100"
        x-transitionleave="transition ease-in-out duration-150"
        x-transitionleavestart="opacity-100"
        x-transitionleaveend="opacity-0"
        className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      ></div>
      <DesktopLeftSide/>
      {/* <MobileLeftside/> */}
      {children}
    </div>
  );
}