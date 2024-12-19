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
                        <h4 className="text-md text-gray-100">
                            [ 0 1 ]
                        </h4>
                        <h1 className="text-4xl text-zinc">
                            Todos mis caminos son la destruccion
                        </h1>
                    </div>
                    <Link to={"/ReproductorCaminos"}>
                        <p className="text-lg text-gray-200 hover:text-zinc">
                            Mirar Teaser
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Caminos;
