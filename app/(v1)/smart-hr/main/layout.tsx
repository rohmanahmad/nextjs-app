import Feature from "@/app/(v1)/smart-hr/main/components/page/feature"
import Pricing from "@/app/(v1)/smart-hr/main/components/page/pricing"
import About from "@/app/(v1)/smart-hr/main/components/page/about"
import Testimoni from "@/app/(v1)/smart-hr/main/components/page/testimoni"

import Header from './components/page/header'
import Footer from "./components/page/footer"

export default function LandingPageMainLayout() {
  return (
    <section>
      <Header />
      <About />
      <Feature />
      <Pricing />
      <Testimoni />
      <Footer />
    </section>
  )
}