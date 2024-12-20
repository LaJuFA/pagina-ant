import Video from "../assets/LoveYouBridgeAudFix.mp4";

const HeroLove = () => {
    return (
        <section className="w-screen h-screen overflow-hidden flex justify-center items-center gap-8 bg-zinc">
          <div>
            <div className="font-helvetica">
              <h4 className="text-lg font-bold">
                The I Love you Bridge
              </h4>
              <h4 className="text-md">
                Año de producción: 2021
              </h4>
            </div>
          </div>
          <div className="w-3/5">
            <video controls>
              <source src={Video} type="video/mp4"/>
            </video>
          </div>
        </section>
      )
}

export default HeroLove