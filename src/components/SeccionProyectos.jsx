import imgCaminos from "../assets/caminos-uno.png"
import imgBridge from "../assets/bridge-uno.jpeg"
import imgDocu from "../assets/YTC1-uno.jpeg"
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SeccionProyectos = () =>{

    useEffect(() => {
    const sections = document.querySelectorAll('.color-section');

    sections.forEach(section => {
      const bg = section.dataset.bg;
      const text = section.dataset.text;

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => applyColors(section, bg, text),
        onEnterBack: () => applyColors(section, bg, text),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const applyColors = (section, bgClass, textClass) => {
    section.className = `color-section min-h-screen flex items-center justify-between transition-colors duration-300 ${bgClass} ${textClass}`;
  };

  return (
    <div className="">
      <div className="scroll-container">
        <div
          className="color-section min-h-screen  transition-colors duration-300 bg-zinc"
          data-bg="bg-[#2f4858]"
          data-text="text-white"
        >
            <div className="flex items-center justify-between common-padding">
                <h2 className="text-4xl font-bold">Sección 1</h2>
                <img src={imgCaminos} className="w-3/5 rounded mt-4" alt="" />
            </div>
          
        </div>

        <div
          className="color-section min-h-screen  transition-colors duration-300 bg-[#2f4858]"
          data-bg="bg-[#006f82]"
          data-text="text-black"
        >
            <div className="flex items-center justify-between common-padding">
                <h2 className="text-4xl font-bold">bridge</h2>
                <img src={imgBridge} className="w-3/5 rounded mt-4" alt="" />
            </div>
          
        </div>

        <div
          className="color-section min-h-screen  transition-colors duration-300 bg-[#006f82]"
          data-bg="bg-[#009891]"
          data-text="text-gray-900"
        >
            <div className="flex items-center justify-between common-padding">
                <h2 className="text-4xl font-bold">YTC1</h2>
                <img src={imgDocu} className="w-3/5 mt-4" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
export default SeccionProyectos