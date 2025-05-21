import imgCam from "../assets/repairCamera.jpg";

const SeccionContacto = () => {
    return (
        <section className="w-screen overflow-hidden bg-zinc common-padding">
            <div className="flex justify-center items-center">
                <img src={imgCam} alt="hombre reparando camara" className="max-w-96"/>
                <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-white mx-10"></div>
                <div className="flex-column">
                    <p className="text-yellow md:text-4xl pb-8 font-bold">¡Contactenos!</p>
                    <p className="text-yellow-300 text-small pb-8">Comuniquese con nosotros y le responderemos a la brevedad.</p>
                    <div className="flex justify-between pb-16">
                        <p>Email: info@yellowtapes.com</p>
                        <p>Teléfono: 9991234567</p>
                    </div>
                    <p>Lunes a Sábados: 10AM-6PM</p>
                    <p>Domingos: 11AM-5PM</p>
                </div>
            </div>
        </section>
    )
}
export default SeccionContacto