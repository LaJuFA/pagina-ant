import Navbar from "./Navbar";
import HeroLove from "./HeroLove";
import Footer from "./Footer";
import { useEffect } from "react";

const ReproductorLove = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <Navbar/>
      <HeroLove/>
      <Footer/>
    </main>
  )
}

export default ReproductorLove