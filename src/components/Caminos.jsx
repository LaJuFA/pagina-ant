import imgUno from "../assets/caminos-uno.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Caminos = () => {

    useGSAP(() => {
        gsap.fromTo('.fade', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.fade',
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

    return (
        <section className="w-full bg-[#FFF27C] overflow-hidden flex items-center px-8 py-16">
            <div className="md:flex gap-10">
                <div className="fade w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h1 className="fade text-5xl text-zinc">
                            Todos mis caminos son la destrucción
                        </h1>
                        <h4 className="fade text-lg text-[#383B43]">
                            Anthony, un joven marcado por su depresión y recuerdos con una chica, busca consuelo en las drogas y los raves. <br/>
                            Su vida da un giro cuando conoce a Kidd Savage, un chico de su edad, pero que vive en la calle. <br/>
                            Juntos recorren la ciudad, dejando atrás sus problemas momentáneamente, mientras que comienzan a cuestionar sus decisiones y reflexionar sobre sus vidas.
                        </h4>
                    </div>
                    <div className="w-32 border-2 border-solid border-[#383B43] text-center rounded-3xl hover:border-zinc text-[#383B43] hover:text-zinc">
                        <Link className="fade" to="/pagina-ant/ReproductorCaminos">
                            <p className="text-lg">
                                Mirar Teaser
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Caminos;
