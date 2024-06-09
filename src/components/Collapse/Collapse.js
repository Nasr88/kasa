import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, description}) =>{
    const [isOpen,setIsOpen] = useState(false);
return(
   <div className="collapse__dropdown__container">
    <div className="collapse__dropdown__container__Trigger"> 
        <div className="collapse__dropdown__container__Trigger__title">
        <h2>{title}</h2>
      </div>
      <FontAwesomeIcon  
        className="chevron" 
        icon={isOpen ? faChevronUp : faChevronDown} 
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