import { infodata } from "../utils/boxInfoData";


function CardInfoHome() {
    const listingInfo= infodata.map((infodatas) => (
    <div className= "box-info" key={infodatas.id}>
        <h3>{infodatas.title}</h3>
        <p>{infodatas.text}</p>
     </div>  
    ))
  
    return (
    <div className="box-info-container">{listingInfo}</div>
    )
  }
  
  export default CardInfoHome;
