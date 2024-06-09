import React from "react";
import { useParams } from 'react-router-dom';
 import Header from "../../components/header/Header";
 import Footer from "../../components/footer/Footer";
// import Collapse from "../../components/Collapse/Collapse";
import Slider from "../../components/slider/Slider";
import logements from "../../data/data";

const Logement =() =>{
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <p>Logement non trouvé</p>;
      }

    return(
        <><Header />
        <div className="container">
            <Slider images={logement.pictures}></Slider>
            <h2>{logement.title}</h2>
        </div>
        <Footer />
        </>
        
     )
}
export default Logement;