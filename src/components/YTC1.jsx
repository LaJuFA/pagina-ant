import imgUno from "../assets/YTC1-uno.png";
import { Link } from "react-router-dom";

const YTC1 = () => {
  return (
        <section className="w-full h-screen bg-white overflow-hidden flex items-center px-10">
            <div id="bento-grid" className="md:flex gap-10">
                <div className="w-3/5">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/5 font-helvetica md:flex flex-col justify-between">
                    <div>
                        <h4 className="text-md text-gray">
                            [ 0 3 ]
                        </h4>
                        <h1 className="text-4xl text-zinc">
                            Yellow Tapes -01-
                        </h1>
                    </div>
                    <Link to={"/ReproductorDocumental"}>
                        <p className="text-lg text-gray hover:text-zinc">
                            Mirar Teaser
                        </p>
                    </Link>
                </div>
            </div>
        </section>
  )
}

export default YTC1