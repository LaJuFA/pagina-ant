import {useState} from 'react';
import heroVid1 from "../assets/TMCSLDaudFix.mp4";
import heroVid2 from "../assets/LoveYouBridgeAudFix.mp4";
import heroVid3 from "../assets/documentalAudFix.mp4";


const HeroComp = () => {
    const [currentVideo, setCurrentVideo] = useState(heroVid1);
  
    const videos = {
        heroVid1: heroVid1,
        heroVid2: heroVid2,
        heroVid3: heroVid3,
    };

    const handleHover = (videoKey) => {
        setCurrentVideo(videos[videoKey]);
    };

    return (
        <div className='relative h-screen w-full overflow-hidden'>
            <video src={currentVideo} className='absolute inset-0 h-full w-full object-cover pointer-events-none'autoPlay muted loop /> 

            {/* Contenido superpuesto */}
            <div className="relative z-10 flex h-full w-full flex-col items-start justify-center bg-black bg-opacity-50 px-10">
                <h1 className="text-4xl font-bold text-yellow md:text-6xl self-end">
                    Yellow Tapes Studio
                </h1>
                <div className="mt-8 flex flex-col items-start space-y-4 font-helvetica">
                    <button onMouseEnter={() => handleHover("heroVid1")} className="text-lg font-medium text-white transition hover:text-gray">
                        Todos mis caminos son la destrucción.
                    </button>
                    <button onMouseEnter={() => handleHover("heroVid2")} className="text-lg font-medium text-white transition hover:text-gray">
                        The I love you bridge.
                    </button>
                    <button onMouseEnter={() => handleHover("heroVid3")} className="text-lg font-medium text-white transition hover:text-gray">
                        Graffiti Tapes - Lima.
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroComp