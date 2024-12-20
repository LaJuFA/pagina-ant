import imgUno from "../assets/caminos-uno.png";
import { Link } from "react-router-dom";

const Caminos = () => {
    return (
        <section className="w-full h-screen bg-white overflow-hidden flex items-center px-10">
            <div id="bento-grid" className="md:flex gap-10">
                <div className="w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h4 className="text-md text-gray">
                            [ 0 1 ]
                        </h4>
                        <h1 className="text-4xl text-zinc">
                            Todos mis caminos son la destrucción
                        </h1>
                        <h4 className="text-lg text-gray-600">
                            Anthony, un joven marcado por su depresión y recuerdos con una chica, busca consuelo en las drogas y los raves. <br/>
                            Su vida da un giro cuando conoce a Kidd Savage, un chico de su edad, pero que vive en la calle. <br/>
                            Juntos recorren la ciudad, dejando atrás sus problemas momentáneamente, mientras que comienzan a cuestionar sus decisiones y reflexionar sobre sus vidas.
                        </h4>
                    </div>
                    <Link to={"/ReproductorCaminos"}>
                        <p className="text-lg text-gray hover:text-zinc">
                            Mirar Teaser
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Caminos;
