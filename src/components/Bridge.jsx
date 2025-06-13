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
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full bg-[#fae846] overflow-hidden flex items-center px-8 py-16">
            <div className="md:flex gap-10">
                <div className="alpha w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h1 className="alpha text-5xl text-black">
                            The I Love you Bridge
                        </h1>
                        <div className="text-zinc text-sm">
                            <p>año: 2022</p>  
                            <p>duración: 6min</p>
                            <p>país: Ucrania</p>
                        </div>
                        <h4 className="alpha text-lg text-zinc">
                            Luego de que una pareja de adictos a la heroína sea testigo del suicidio de su amigo, discuten de quién es la culpa.
                            Este cortometraje está inspirado en el icónico puente "The I Love You Bridge", conocido por su historia cargada de amor, pérdida y expresión urbana. La pieza toma como punto de partida ese gesto íntimo convertido en símbolo público, para explorar emociones similares en un contexto local.
                            Se planea desarrollar una película en el futuro producida bajo el sello de Yellow Tapes.
                        </h4>
                    </div>
                    <div className="w-32 border-2 border-solid border-black text-center rounded-3xl hover:border-black text-[#fae846] hover:text-black bg-black hover:bg-[#fae846]">
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