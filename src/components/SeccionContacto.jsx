import imgCam from "../assets/repairCamera.jpg";

const SeccionContacto = () => {
    return (
        <section className="w-screen h-full overflow-hidden bg-zinc common-padding border-b-2">
            <div className="flex justify-evenly">
                <div className="w-50% text-end p-[1rem]">
                    <div className="rounded">
                        <img src={imgCam} alt="" className="object-contain w-[100vh] rounded-3xl"/>
                    </div>
                    <div>
                        <h1 className="text-6xl font-ducktape py-5">CONTACTO</h1>
                    </div>
                </div>
                <div className="p-[1.5rem] text-white">
                    <h1 className="text-3xl font-helvetica">Deje un mensaje y le responderemos a la brevedad</h1>
                    <form action="https://formsubmit.co/Anthony@yellowtapes.com" method="POST">
                        <div className="flex justify-start gap-12 py-4">
                            <div className="border-2 border-yellow bg-zinc rounded ">
                                <input type="text" name="name" required placeholder="Nombre completo" className="bg-zinc p-[1rem]"/>
                            </div>
                            <div className="border-2 border-yellow bg-none rounded">
                                <input type="email" name="email" required placeholder="Email" className="bg-zinc p-[1rem]"/>
                            </div>
                        </div>
                        <div className="pb-4 ">
                            <textarea name="message" required placeholder="Tu mensaje" className="bg-zinc p-[1rem] border-2 border-yellow rounded w-[100%] h-[100%]"></textarea>
                        </div>
                        <button type="submit" value="send" className="bg-yellow border-2 border-yellow text-zinc rounded-3xl px-[1.5rem] py-[0.7rem] font-bold hover:bg-zinc hover:text-yellow" >ENVIAR</button>
                    </form> 
                </div>
            </div>
        </section>
    )
}
export default SeccionContacto