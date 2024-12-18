import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Video from "./assets/TMCSLD.mp4";

const App = () => {

  return (
    <main>
      <div className="relative h-screen">
        <Navbar/>
        <div className="absolute inset-0 -z-10">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        </div>
      </div>
      <Hero/>
    </main>
  )
}

export default App
