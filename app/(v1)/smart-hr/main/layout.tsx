import Feature from "@/app/(v1)/smart-hr/components/layout/feature";
import Pricing from "@/app/(v1)/smart-hr/components/layout/pricing";
import About from "@/app/(v1)/smart-hr/components/layout/about";
import Testimoni from "@/app/(v1)/smart-hr/components/layout/testimoni";

import Header from '../components/layout/header';
import Footer from "../components/layout/footer";

export default function LandingPageLayout() {
  return (
    <>
      <Header />
      <About />
      <Feature />
      <Pricing />
      <Testimoni />
      <Footer />
    </>
  );
}