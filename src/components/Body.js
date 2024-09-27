import resObj from "../utils/mock";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
const Body=()=>{
    //let listOfRes=resObj;
    const [listOfRes,setList]=useState(resObj);   
    useEffect(()=>{
        fetchData();
    },[]);
const fetchData=async()=>{
const data=await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/update"
);
const json= await data.json();
console.log(json);
};

    
    return (
<div className="Body">
<div className="Filter">
<button className="filBtn" 
 onClick={()=>{
    const topRatedList=
 listOfRes.filter((restaurant)=>
    parseFloat(restaurant.info.avgRatingString) >= 4.3
 );
 setList(topRatedList);
 console.log(topRatedList);
 }}>
    Top Rated</button>

</div>

<div className="restoCard">
    {
    listOfRes.map(restaurant=>
    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
    )}
</div>
</div>
    )}
export default Body;