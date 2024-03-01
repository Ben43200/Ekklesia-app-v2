import { listings } from "../utils/data";


function Card() {
    const listingImage= listings.map((listing) => (
    //   <div className="grid-container">
    <div className= "box-image" key={listing.id}>
      <img src={listing.image} alt={listing.description}/>
     {/* {/* </div> */}
         <div className= "box-info">
         <h3>{listing.title}</h3>
         <p>{listing.text}</p>
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