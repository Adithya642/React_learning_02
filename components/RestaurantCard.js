import {PIC} from "../utils/constant";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=resData.info;
    return(      
        <div className="Restaurant" style={{
            backgroundColor:"#f0f0f0"
          }}>
            <img alt="Our Items" className="foodImg" style={{width:"100px"}} src={PIC+cloudinaryImageId}/>
            <h3> {name}</h3>
            <h4> {cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4> 
        </div>
    )
}
export default RestaurantCard;