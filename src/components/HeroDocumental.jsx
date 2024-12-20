import Video from "../assets/documentalAudFix.mp4";

const HeroDocumental = () => {
  return (
    <section className="w-screen h-screen overflow-hidden flex justify-center items-center gap-8 bg-zinc">
      <div className="w-3/5">
        <video controls>
          <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <div>
        <div className="font-helvetica">
          <h4 className="text-lg font-bold">
            Graffiti Tapes - Lima
          </h4>
          <h4 className="text-md">
            Año de producción: 2025
          </h4>
        </div>
      </div>
    </section>
  )
}

export default HeroDocumental