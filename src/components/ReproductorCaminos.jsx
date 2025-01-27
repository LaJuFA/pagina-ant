import Navbar from "./Navbar";
import HeroCaminos from "./HeroCaminos";
import Footer from "./Footer";
import { useEffect } from "react";

const ReproductorCaminos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <Navbar/>
      <HeroCaminos/>
      <Footer/>
    </main>
  )
}

export default ReproductorCaminos