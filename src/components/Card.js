import { listings } from "../utils/data";
import { NavLink } from "react-router-dom";
// @import "./variables.scss";
// import "./home.scss"

function Card() {
 
    const listingImage= listings.map((listing) => (
    //   <div className="grid-container">
    <div className= "box-card" key={listing.id}>
      <img src={listing.image} alt={listing.description}/>
     {/* {/* </div> */}
     
         <div className= "box-info">
         <h3>{listing.title}</h3>
         <p>{listing.text}</p>
       <div className="button-box">
         <NavLink to={`/${listing.link}`} className="button">
                      {listing.link}
                    </NavLink>
                    </div>
                    
      </div>  
      </div>  
    ))
  
    return (
    <div className="box-image-container">
    {listingImage}
    </div>
    )
  }
  
  export default Card;