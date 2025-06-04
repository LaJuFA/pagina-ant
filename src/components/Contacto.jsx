import Navbar from "./Navbar";
import Footer from "./Footer";
import SeccionContacto from "./SeccionContacto";
import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <main>
      <Navbar/>
      <SeccionContacto/>
      <Footer/>
    </main>
  )
}

export default Contacto