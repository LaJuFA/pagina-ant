import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroNosotros from "./HeroNosotros";
import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <Navbar/>
      <HeroNosotros/>
      <Footer/>
    </main>
  )
}

export default Nosotros