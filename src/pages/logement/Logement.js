import React from "react";
import { useParams } from 'react-router-dom';
 import Header from "../../components/header/Header";
 import Footer from "../../components/footer/Footer";
// import Collapse from "../../components/Collapse/Collapse";
import Slider from "../../components/slider/Slider";
import logements from "../../data/data";
import Tag from "../../components/tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/host/Host";
import Rate from "../../components/rate/Rate"

const Logement =() =>{
    const { id } = useParams();// Extraire le paramètre id de l'URL
    const logement = logements.find((logement) => logement.id === id);

/* Équipements */
 const equipements = logement?.equipments.map((equipment, i) => {
  return (
    <ul key={i}  style={{ listStyleType: 'none' }}>
      <li>{equipment}</li>
    </ul>
  );
});
 

    // if (!logement) {
    //     return <p>Logement non trouvé</p>;
    //   }

    return(
        <>
            <Header />
            <div className="image-container">
                <Slider images={logement.pictures}></Slider>
            </div>
            <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{logement?.title}</span>
                  <span className="endroit-logement">
                    {logement?.location}
                  </span>
                </div>
                {/* tag */}
                <div className="description-info__titletags__tags">
                   {logement.tags.map((tag, index) => (
                   <Tag key={index} tag={tag} />
                    ))}
                </div>
              </div>
              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={logement?.host.name}
                    picture={logement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate rating={logement.rating} />
                </div>
              </div>
            </div>

                {/* collapse */}
                <div className="description-equipments">
                  <div className="description-equipments__description">
                    <Collapse title="Description" description={logement?.description}></Collapse>
                  </div>
                  <div className="description-equipments__equipments">
                    <Collapse title="Équipements" description={equipements}></Collapse>
                  </div>
                </div>
             
          </section>
            <Footer />
        </>
        
     )
}
export default Logement;