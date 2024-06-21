import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Slider = ({images}) => {
    //state(état, données)
    //je définit un state que je l'initialise à 0 que je le récupère dans une variable indexTab et que je ne peux le modifier qu'avec setindexTab
    const [indexTab, setindexTab] = useState(0)
    // Si indexTab est égal à l'index de la dernière image (images.length - 1), il est réinitialisé à 0 pour boucler au début.
    const NextPicture = ()=>{
      indexTab === images.length - 1 ? setindexTab (0) : setindexTab(indexTab+1)  
    }
    const PreviousPicture = ()=>{
        indexTab === 0 ? setindexTab (images.length - 1 ) : setindexTab(indexTab-1) 
    }
    return (
        <>
            <img src={images[indexTab]} alt=""></img>
            {images.length > 1 && (
                <>
                <FontAwesomeIcon icon={faChevronLeft} className="nav-icon left" onClick={PreviousPicture} />
                <FontAwesomeIcon icon={faChevronRight} className="nav-icon right" onClick={NextPicture} />
                <div className="numbering">{indexTab + 1}/{images.length}</div>
                </>
            )}
        </>
            
        
    )}
  
  export default Slider;