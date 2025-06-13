import {useState} from 'react';
import heroVid1 from "../assets/TMCSLDaudFix.mp4";
import heroVid2 from "../assets/LoveYouBridgeAudFix.mp4";
import heroVid3 from "../assets/graffity.mp4";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeroComp = () => {
    const [currentVideo, setCurrentVideo] = useState(heroVid3);
  
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
            <div className="relative z-10 flex h-full w-full flex-col items-start justify-between bg-black bg-opacity-50 px-20 pt-24 pb-8 gap-10">
                <h1 className="font-ducktape text-7xl font-bold text-yellow-10 md:text-7xl self-end mt-16">
                    Yellow Tapes
                </h1>
                <div className="flex flex-col items-start gap-4 font-helvetica">
                    <button onMouseEnter={() => handleHover("heroVid3")} className="flex gap-2 text-6xl text-white transition hover:text-gray" >
                        Graffiti Tapes - Lima  
                        <p className='text-sm'>2025</p>
                    </button>
                    <button onMouseEnter={() => handleHover("heroVid1")} className="flex gap-2 text-6xl text-white transition hover:text-gray" >
                        Todos mis caminos son la destrucción  
                        <p className='text-sm'>2024</p>
                    </button>
                    <button onMouseEnter={() => handleHover("heroVid2")} className="flex gap-2 text-6xl text-white transition hover:text-gray" >
                        The I love you bridge  
                        <p className='text-sm'>2021</p>
                    </button>
                </div>
                <div className='self-center rounded-full border-2 border-white px-[1rem] py-{1.5rem} hover:text-gray hover:border-gray'>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>
            </div>
        </div>
    )
}

export default HeroComp