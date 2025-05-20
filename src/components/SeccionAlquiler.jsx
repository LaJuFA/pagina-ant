import {imgUno} from "../assets/alquiler-uno.jpg"

const SecccionAlquiler = () => {
    return (
        <section className="w-screen h-screen overflow-hidden bg-zinc common-padding">
            <div className="flex justify-between">
                <div>
                    <img src={imgUno} alt="Equipos para alquilar" />
                </div>
                <div>
                    <p> Lista de las cosas para alquilar </p>
                </div>
            </div>
        </section>
    )
}
export default SecccionAlquiler