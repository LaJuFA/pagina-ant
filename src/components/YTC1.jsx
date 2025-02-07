import imgUno from "../assets/YTC1-uno.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const YTC1 = () => {

    useGSAP(() => {
        gsap.fromTo('.fadein', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.fadein',
            end: 'bottom bottoma',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full bg-zinc overflow-hidden flex items-center px-8 py-16">
            <div className="md:flex gap-10">
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h1 className="fadein text-5xl text-yellow-10">
                            Graffiti Tapes - Lima
                        </h1>
                        <h4 className="fadein text-lg text-yellow-100">
                            Una serie documental que muestra la escena graffiti en Lima a partir de grafiteros influyentes de la escena
                        </h4>
                    </div>
                    <div className="w-32 border-2 border-solid border-yellow-100 text-center rounded-3xl hover:border-yellow-10 text-yellow-100 hover:text-yellow-10">
                    <Link to="/pagina-ant/ReproductorDocumental">
                        <p className="fadein text-lg">
                            Mirar Teaser
                        </p>
                    </Link>
                    </div>
                </div>
                <div className="fadein w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
  )
}

export default YTC1