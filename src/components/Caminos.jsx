import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import imgUno from "../assets/caminos-uno.png";
import Sonder from "../assets/zonderLogo.png";

const Caminos = () => {
    useGSAP(() => {
        gsap.to('#title', {opacity: 1, y: 0})
        gsap.to('#float', {
            duration: 1,
            y: 8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })
    })

  return (
    <section className="w-screen h-full common-padding overflow-hidden bg-white">
        <div>
            <div className="w-full md:flex px-8 py-8 gap-8">
            <img id="float" src={imgUno} alt="Escena" className="w-3/5" width={400}/>
                <div className='w-2/5 flex flex-col justify-between font-helvetica'>
                    <div>
                        <h1 id="title" className="section-heading text-zinc font-bold">
                            Todos mis caminos son la destruccion
                        </h1>
                        <p className="text-gray-200">
                            -2024
                        </p>
                    </div>
                    <div className="flex justify-between items-end">
                        <p className="text-gray-300 font-medium text-lg hover:text-zinc cursor-pointer transition">
                            Conocer mas
                        </p>
                        <img src={Sonder} alt="SonderIcon" className="w-1/5" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Caminos