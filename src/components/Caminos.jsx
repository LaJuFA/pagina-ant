import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import imgUno from "../assets/caminos-uno.png";

const Caminos = () => {
    useGSAP(() => {
        gsap.to('#title', {opacity: 1, y: 0})
    })

  return (
    <section className="w-screen h-full common-padding overflow-hidden bg-white">
        <div className="rounded-lg border-solid border-2 border-gray-300">
            <div className="w-full md:flex px-8 py-8">
                <img src={imgUno} alt="Escena" className="" width={600}/>
                <h1 id="title" className="section-heading text-zinc">
                    Todos mis caminos son la destruccion
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Caminos