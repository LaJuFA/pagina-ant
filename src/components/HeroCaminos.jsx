import Video from "../assets/TMCSLDaudFix.mp4";

const HeroCaminos = () => {
  return (
    <section className="w-screen h-screen overflow-hidden flex justify-center items-center gap-8 bg-yellow">
      <div className="w-3/5">
        <video controls>
          <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <div>
        <div className="font-helvetica">
          <h4 className="text-lg font-bold">
            Todos mis caminos son la destrucción
          </h4>
          <h4 className="text-md">
            Año de producción: 2024
          </h4>
        </div>
      </div>
    </section>
  )
}

export default HeroCaminos