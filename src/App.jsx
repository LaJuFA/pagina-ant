import HeroComp from "./components/HeroComp";
import Navbar from "./components/Navbar";
import Caminos from "./components/Caminos";
import Bridge from "./components/Bridge";
import YTC1 from "./components/YTC1";
import ReproductorCaminos from "./components/ReproductorCaminos";

const App = () => {

  return (
    <main>
      <Navbar />
      <HeroComp />
      <Caminos/>
      <Bridge/>
      <YTC1/>
    </main>
  )
}

export default App
