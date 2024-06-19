import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, description}) =>{
  //state(état, données)
  //je définit un state que je l'initialise à false que je le récupère dans une variable isOpen et que je ne peux le modifier qu'avec setIsOpen
    const [isOpen,setIsOpen] = useState(false);

  //affichage (render) 
    return(
      <div className="collapse__dropdown__container">
        <div className="collapse__dropdown__container__Trigger"> 
            <div className="collapse__dropdown__container__Trigger__title">
            {title}
          </div>
          <FontAwesomeIcon  
            className="chevron" 
            icon={isOpen ? faChevronDown : faChevronUp} 
            onClick={()=>{setIsOpen(!isOpen)}}>
          </FontAwesomeIcon>
        </div>
        
          {isOpen ? 
            <div className="collapse__dropdown__container__content">
                <p>{description}</p>
            </div> : ""}
              
                
        </div>
        
    );
}
export default Collapse;