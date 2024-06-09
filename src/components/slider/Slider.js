import { useState } from "react";

const Slider = ({images}) => {
    const [indexTab, setindexTab] = useState(0)//j'ai définit l'état initial
    const NextPicture = ()=>{
      indexTab === images.length - 1 ? setindexTab (0) : setindexTab(indexTab+1)  
    }
    const PreviousPicture = ()=>{
        indexTab === 0 ? setindexTab (images.length - 1 ) : setindexTab(indexTab-1) 
    }
    return (
        <>
            <img src={images[indexTab]} alt=""></img>
            <button className="" onClick={NextPicture}>Next</button>
            <button className="" onClick={PreviousPicture}>Previous</button>
        </>
        
    )}
  
  export default Slider;