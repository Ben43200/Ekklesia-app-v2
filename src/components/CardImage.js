import { listings } from "../utils/data";


function CardImage() {
    const listingImage= listings.map((listing) => (
    <div key={listing.id}>
      <h2>{listing.description}</h2>
      <img src={listing.image} alt={listing.description}/>
     </div>  
    ))
  
    return (
    <div>
      <h1>Free Stuff Page</h1>
      {listingImage}
    </div>
    )
  }
  
  export default CardImage;