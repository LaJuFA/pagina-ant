import imgUno from "../assets/bridge-uno.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Bridge = () => {
    useGSAP(() => {
        gsap.fromTo('.alpha', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.alpha',
            end: 'center center',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full h-screen bg-yellow overflow-hidden flex items-center px-10">
            <div className="md:flex gap-10">
                <div className="alpha w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h1 className="alpha text-5xl text-zinc">
                            The I Love you Bridge
                        </h1>
                        <h4 className="alpha text-lg text-gray-600">
                            Una pareja de adictos a la heroína se culpan el uno al otro por el suicidio de su amigo.
                        </h4>
                    </div>
                    <div className="w-32 border-2 border-solid border-gray-500 text-center rounded-3xl hover:border-zinc text-gray-500 hover:text-zinc">
                        <Link className="alpha" to="/pagina-ant/ReproductorLove">
                            <p className="text-lg">
                                Mirar Teaser
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Bridge