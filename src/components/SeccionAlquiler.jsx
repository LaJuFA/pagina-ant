import imgUno from "../assets/alquiler-uno.jpg"

const SecccionAlquiler = () => {
    return (
        <section className="w-screen h-screen overflow-hidden bg-zinc pt-24 pr-16 pl-16">
            <div className="flex justify-between gap-4">
                <div className="w-3/5">
                    <img src={imgUno} alt="Equipos para alquilar" className="rounded-xl" />
                </div>
                <div className="flex flex-col w-2/5 text-zinc font-helvetica text-2xl font-bold gap-4">
                    <div className="bg-[#f7f500] h-3/4 rounded-xl p-4">
                        <p>- Sobre el precio -</p>
                        <p>Para informacion exacta del precio de cada equipo contactarse por el numero de telefono</p>
                    </div>
                    <div className="bg-[#f7f500] h-1/4 rounded-xl p-4">
                        <p>- Lista de equipos a la venta -</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecccionAlquiler