import imgUno from "../assets/caminos-uno.png";
import imgDos from "../assets/bridge-uno.jpeg";
import imgTres from "../assets/YTC1-uno.jpeg";

const SecccionNosotros = () => {
  return (
    <section className="w-screen h-screen overflow-hidden bg-white common-padding">
      <div className="w-full h-full flex flex-col justify-evenly text-center">
        <div>
            <h1 className="text-zinc font-helvetica text-4xl font-bold">
                Donde el Arte y la Rebeldía Convergen
            </h1>
            <p className="text-gray-500 text-lg font-helvetica">
                Nuestro portafolio refleja nuestro compromiso con lo alternativo. <br/>
                Desde documentales sobre colectivos artísticos hasta cortometrajes que exploran subculturas, cada proyecto es un homenaje a la creatividad sin límites
            </p>
        </div>
        <div className="flex justify-around">
            <div>
                <h4 className="text-zinc">
                    [ -X- ]
                </h4>
                <img src={imgUno} alt="Todos mis caminos son la destruccion" className="w-96 h-16 rounded-full object-none right-bottom opacity-80"/>
                <h6 className="text-zinc">
                    -()-
                </h6>
            </div>
            <div>
                <h4 className="text-zinc">
                    [ -♡- ]
                </h4>
                <img src={imgDos} alt="Todos mis caminos son la destruccion" className="w-96 h-16 rounded-full object-none right-bottom opacity-80"/>
                <h6 className="text-zinc">
                    -()-
                </h6>
            </div>
            <div>
                <h4 className="text-zinc">
                    [ -➀- ]
                </h4>
                <img src={imgTres} alt="Todos mis caminos son la destruccion" className="w-96 h-16 rounded-full object-none right-bottom opacity-80"/>
                <h6 className="text-zinc">
                    -()-
                </h6>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SecccionNosotros