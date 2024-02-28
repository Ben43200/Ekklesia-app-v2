import { listings } from "../utils/data";


function CardImage() {
    const listingImage= listings.map((listing) => (
    <div className= "box-image" key={listing.id}>
      <img src={listing.image} alt={listing.description}/>
     </div>  
    ))
  
    return (
    <div>
    {listingImage}
    </div>
    )
  }
  
  export default CardImage;
