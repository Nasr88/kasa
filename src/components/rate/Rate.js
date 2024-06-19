import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';





const Rate = ({ rating }) => {
  // Utilisez Array.from pour créer un tableau de 5 éléments
  const stars = Array.from({ length: 5 }, (_, index) => {
    // Déterminer si l'étoile doit être pleine ou vide
    return (
   <FontAwesomeIcon 
        style={{ color: '#ff6060'}}
        key={index}
        icon={index < rating ? fullStar : emptyStar}
        
      />

    );
  });

  return <div>{stars}</div>;
};
export default Rate;