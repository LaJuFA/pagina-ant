import imgUno from "../assets/YTC1-uno.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const YTC1 = () => {
    useGSAP(() => {
        gsap.fromTo('.nigg', {
            opacity: 0,
            y: 128,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
            trigger: '.nigg',
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full h-screen bg-white overflow-hidden flex items-center px-10">
            <div className="md:flex gap-10">
                <div className="nigg w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h4 className="nigg text-md text-gray">
                            [ 0 3 ]
                        </h4>
                        <h1 className="nigg text-4xl text-zinc">
                            Graffiti Tapes - Lima
                        </h1>
                        <h4 className="nigg text-lg text-gray-600">
                            Una serie documental que muestra la escena graffiti en Lima a partir de grafiteros influyentes de la escena
                        </h4>
                    </div>
                    <Link to="/pagina-ant/ReproductorDocumental">
                        <p className="nigg text-lg text-gray hover:text-zinc">
                            Mirar Teaser
                        </p>
                    </Link>
                </div>
            </div>
        </section>
  )
}

export default YTC1