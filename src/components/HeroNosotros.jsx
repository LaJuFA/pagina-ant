import policeImg from "../assets/police.jpg"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HeroNosotros = () => {
  useGSAP(() => {
    gsap.fromTo('.fondo',{ 
      opacity:0,
    },
    {
      opacity:1,
      delay:0.5,
    })
  })

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <img src={policeImg} alt="" className='absolute inset-0 h-full w-full object-cover fondo'/> 
      {/* Contenido superpuesto */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-80 px-10">
        <h1 className="font-helvetica text-white md:text-6xl">
          "El arte no convencional merece una pantalla."
        </h1>
      </div>
    </div>
  );
};

export default HeroNosotros