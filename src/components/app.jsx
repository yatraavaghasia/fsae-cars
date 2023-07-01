import React from "react";
import CarouselComponent from "./carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoWrapper from "./infowrapper";
function App()
{
    return (
        <div>
            <Navbar />
            <CarouselComponent />
            <InfoWrapper />
            <Footer />
        </div>
    );
}
export default App;
