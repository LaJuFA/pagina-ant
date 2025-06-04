import Navbar from "./Navbar";
import Footer from "./Footer";
import SeccionAlquiler from "./SeccionAlquiler";
import { useEffect } from "react";

const Alquiler = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <main>
            <Navbar/>
            <SeccionAlquiler/>
            <Footer/>
        </main>
    )
}

export default Alquiler