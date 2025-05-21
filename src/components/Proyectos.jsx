import Navbar from "./Navbar";
import Footer from "./Footer";
import SeccionProyectos from "./SeccionProyectos";
import { useEffect } from "react";

const Proyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <Navbar/>
      <SeccionProyectos/>
      <Footer/>
    </main>
  )
}

export default Proyectos