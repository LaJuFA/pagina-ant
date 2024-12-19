import imgUno from "../assets/bridge-uno.jpeg";
import { Link } from "react-router-dom";

const Bridge = () => {
  return (
        <section className="w-full h-screen bg-[#FCFFC1] overflow-hidden flex items-center px-10">
            <div id="bento-grid" className="md:flex gap-10">
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h4 className="text-md text-gray">
                            [ 0 2 ]
                        </h4>
                        <h1 className="text-4xl text-zinc">
                            Love bridge
                        </h1>
                    </div>
                    <Link to={"/ReproductorLove"}>
                        <p className="text-lg text-gray hover:text-zinc">
                            Mirar Teaser
                        </p>
                    </Link>
                </div>
                <div className="w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
  )
}

export default Bridge