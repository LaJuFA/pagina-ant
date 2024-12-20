import imgUno from "../assets/bridge-uno.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Bridge = () => {
    useGSAP(() => {
        gsap.fromTo('.nigge', {
            opacity: 0,
            y: 128,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
            trigger: '.nigge',
            end: 'center center',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full h-screen bg-[#FCFFC1] overflow-hidden flex items-center px-10">
            <div className="md:flex gap-10">
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h4 className="nigge text-md text-gray">
                            [ 0 2 ]
                        </h4>
                        <h1 className="nigge text-4xl text-zinc">
                            The I Love you Bridge
                        </h1>
                        <h4 className="nigge text-lg text-gray-600">
                            Una pareja de adictos a la heroína se culpan el uno al otro por el suicidio de su amigo.
                        </h4>
                    </div>
                    <Link className="nigge" to="/pagina-ant/ReproductorLove">
                        <p className="text-lg text-gray hover:text-zinc">
                            Mirar Teaser
                        </p>
                    </Link>
                </div>
                <div className="nigge w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
  )
}

export default Bridge