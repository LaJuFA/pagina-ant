import HeroComp from "./components/HeroComp";
import Navbar from "./components/Navbar";
import Caminos from "./components/Caminos";
import Bridge from "./components/Bridge";
import YTC1 from "./components/YTC1";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <main>
      <Navbar/>
      <HeroComp/>
      <Caminos/>
      <YTC1/>
      <Bridge/>
      <Footer/>
    </main>
  )
}

export default App
