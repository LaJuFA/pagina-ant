import Video from "../assets/documentalAudFix.mp4";

const HeroDocumental = () => {
  return (
    <section className="w-screen h-screen overflow-hidden flex justify-center items-center gap-8">
      <div className="w-3/5">
        <video controls>
          <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <div>
        <div className="font-helvetica">
          <h4 className="text-lg font-bold">
            Nombre de la persona
          </h4>
          <h4 className="text-md">
            [Título]
          </h4>
        </div>
        <div className="font-helvetica">
          <h4 className="text-lg font-bold">
            Nombre de la persona
          </h4>
          <h4 className="text-md">
            [Título]
          </h4>
        </div>
        <div className="font-helvetica">
          <h4 className="text-lg font-bold">
            Nombre de la persona
          </h4>
          <h4 className="text-md">
            [Título]
          </h4>
        </div>
      </div>
    </section>
  )
}

export default HeroDocumental