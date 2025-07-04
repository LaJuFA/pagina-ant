import imgUno from "../assets/alquiler-uno.jpg"
import imgDos from "../assets/alquiler-dos.jpg"
import imgTres from "../assets/alquiler-tres.jpg"
import imgCuatro from "../assets/alquiler-cuatro.jpg"
import { Link } from "react-router-dom";

const SecccionAlquiler = () => {
    return (
        <section className="w-screen h-full overflow-hidden bg-zinc flex flex-col gap-8">
            <div className="text-right pt-16 pr-20">
                <h1 className="text-2xl text-yellow-10 font-ducktape">------Alquiler</h1>
            </div>
            <div className="bg-yellow-10 text-zinc text-center font-nb px-16 py-2">
                <h1 className="text-6xl">Precio y cantidad de dias de alquiler</h1>
                <p className="text-2xl pt-4">
                    Todos los datos relacionados al alquiler de alguno de los equipos debe ser
                    consultado directamente por el numero de telefono o enviando un email
                </p>
            </div>
            <div className="flex justify-evenly font-nb">
                <div className="border-2 border-yellow-200 rounded-lg p-4 flex flex-col items-center">
                    <img src={imgDos} alt="" className="w-[15rem] rounded-lg"/>
                    <h1 className="pt-2 text-4xl text-yellow-10">Mir 37mm F2.8</h1>
                    <div className="pt-2 flex gap-8">
                        <div className="w-32 bg-yellow-100 text-zinc text-center rounded-3xl hover:bg-yellow-10">
                            <Link to="/Contacto">
                                <p className="text-xl">
                                    Cotizar
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-yellow-200 rounded-lg p-4 flex flex-col items-center">
                    <img src={imgUno} alt="" className="w-[15rem] h-[15rem] object-cover rounded-lg"/>
                    <h1 className="pt-2 text-4xl text-yellow-10">Sony Fx6</h1>
                    <div className="pt-2 flex gap-8">
                        <div className="w-32 bg-yellow-100 text-zinc text-center rounded-3xl hover:bg-yellow-10">
                            <Link to="/Contacto">
                                <p className="text-xl">
                                    Cotizar
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-yellow-200 rounded-lg p-4 flex flex-col items-center">
                    <img src={imgCuatro} alt="" className="w-[15rem] rounded-lg"/>
                    <h1 className="pt-2 text-3xl text-yellow-10">MKE 600 Sennheiser</h1>
                    <div className="pt-2 flex gap-8">
                        <div className="w-32 bg-yellow-100 text-zinc text-center rounded-3xl hover:bg-yellow-10">
                            <Link to="/Contacto">
                                <p className="text-xl">
                                    Cotizar
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-yellow-200 rounded-lg p-4 flex flex-col items-center">
                    <img src={imgTres} alt="" className="w-[15rem] rounded-lg"/>
                    <h1 className="pt-2 text-4xl text-yellow-10">Helios 58mm F2.0</h1>
                    <div className="pt-2 flex gap-8">
                        <div className="w-32 bg-yellow-100 text-zinc text-center rounded-3xl hover:bg-yellow-10">
                            <Link to="/Contacto">
                                <p className="text-xl">
                                    Cotizar
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly font-nb pb-16">
                
                
            </div>
        </section>
    )
}
export default SecccionAlquiler