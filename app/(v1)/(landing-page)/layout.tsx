import "@/styles/tailwind.css";
import "@/styles/slick.css";

import Feature from "@/app/(v1)/(landing-page)/(pages)/feature/page";
import Pricing from "@/app/(v1)/(landing-page)/(pages)/pricing/page";
import Hero from "@/app/(v1)/(landing-page)/(pages)/hero/page";

import Header from './components/layout/header';
import Footer from "./components/layout/footer";

export default function LandingPageLayout() {
  return (
    <html>
      <body>
        <Header/>
          <Hero />
          <Feature />
          <Pricing />
        <Footer/>
      </body>
    </html>
  );
}