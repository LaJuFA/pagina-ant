import { useState } from "react";
import imgCaminos from "../assets/caminosCrop.jpg";
import imgBridge from "../assets/bridgeCrop.jpg";
import imgDocumental from "../assets/docCrop.jpg";


const SeccionProyectos = () => {
    const [index,setIndex] = useState(0);

    const images = [imgCaminos,imgBridge,imgDocumental];

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <section className="h-screen w-full overflow-hidden bg-zinc common-padding">
            <div className="flex items-end">
                <p>Iron Bridge</p>
                <div className="shrink">
                    <img key={images[index]} src={images[index]} alt="imagen inicial" className="h-1/2 object-contain"/>
                </div>
                <button onClick={handleNext} className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"></button>
                
            </div>
        </section>
    )
}
export default SeccionProyectos