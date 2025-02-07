import Navbar from "./Navbar";
import HeroDocumental from "./HeroDocumental";
import Footer from "./Footer";
import { useEffect } from "react";

const ReproductorDocumental = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <Navbar/>
      <HeroDocumental/>
      <Footer/>
    </main>
  )
}

export default ReproductorDocumental