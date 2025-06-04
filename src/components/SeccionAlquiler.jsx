import imgUno from "../assets/alquiler-uno.jpg"
import imgDos from "../assets/alquiler-dos.jpg"
import imgTres from "../assets/alquiler-tres.jpg"

const SecccionAlquiler = () => {
    return (
        <section className="w-screen h-full overflow-hidden bg-zinc pt-16 pr-16 pl-16 flex flex-col gap-4">
            <div className="flex justify-center items-center">
                <h1 className="text-6xl font-ducktape py-5">Alquiler de equipos</h1>
            </div>
            <div className="flex justify-between gap-4">
                <div className="w-3/5">
                    <img src={imgUno} alt="Equipos para alquilar" className="rounded-xl" />
                </div>
                <div className="flex flex-col w-2/5 text-zinc font-oswald font-bold text-[#f7f500] gap-4">
                    <div className="border-2 border-[#f7f500] p-4 rounded-xl flex justify-center items-center">
                        <h2 className="text-2xl">Sony Fx6</h2>
                    </div>
                    <div className="border-2 border-[#f7f500] h-full rounded-xl p-4 text-center">
                        <h2 className="text-2xl">Sobre el precio de cada equipo</h2>
                        <p className="py-2 text-yellow-100">Para informacion exacta del precio de cada equipo contactarse 
                            por el numero de telefono: +51 945 298 882</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 font-oswald font-bold text-[#f7f500]">
                <div className="border-2 border-[#f7f500] w-3/5 rounded-xl p-4">
                    <h1 className="text-2xl">Lista de todos los equipos para alquilar</h1>
                    <p className="py-2 text-yellow-100">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus alias et placeat officia. Rem facilis, quam quis nobis repellendus perferendis sunt quas enim impedit dolorem repellat nam, blanditiis sequi modi provident. Laboriosam dolorum voluptas tempore ad error, sequi cum.</p>
                </div>
                <div className="w-2/5 flex gap-4">
                    <img src={imgDos} alt="Equipos para alquilar" className="w-1/2 rounded-xl"/>
                    <img src={imgTres} alt="Equipos para alquilar" className="w-1/2 rounded-xl"/>
                </div>
            </div>
        </section>
    )
}
export default SecccionAlquiler