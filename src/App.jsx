import HeroComp from "./components/HeroComp";
import Navbar from "./components/Navbar";
import Caminos from "./components/Caminos";
import Bridge from "./components/Bridge";
import YTC1 from "./components/YTC1";
import ReproductorCaminos from "./components/ReproductorCaminos";
import ReproductorLove from "./components/ReproductorLove";
import ReproductorDocumental from "./components/ReproductorDocumental";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";

const App = () => {

  return (
    <main>
      <Navbar />
      <HeroComp />
      <Caminos/>
      <Bridge/>
      <YTC1/>
      <Footer/>
    </main>
  )
}

export default App
