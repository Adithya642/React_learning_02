import resObj from "../utils/mock";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    //let listOfRes=resObj;
    const [listOfRes,setList]=useState(resObj);  
    const [tempList,setTemp]=useState(resObj);
   // console.log(listOfRes);
    const [searchText,setSearchText]=useState(); 
    console.log("body rendered");
    useEffect(()=>{
        fetchData();
    },[]);
const fetchData=async()=>{
const data=await fetch(
    "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
);
const json= await data.json();
console.log(json);
setList(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.
    infoWithStyle?.restaurants)
   // console.log(listOfRes);
};
   // console.log(listOfRes);
    return (listOfRes && listOfRes.length===0) ?<Shimmer/>:(
<div className="Body">
<div className="Searchbar">
    <input type="text" className="search-bar" 
    value={searchText} onChange={(e)=>{
        setSearchText(e.target.value); 
        }} />
   <button 
   onClick={()=>{
   const filteredList= listOfRes.filter((res)=>
    res.info.name.toLowerCase().includes(searchText.toLowerCase()));
   //setList(filteredList);
   setTemp(filteredList);
   }}>Search</button>

</div>
<div className="Filter">

<button className="filBtn" 
 onClick={()=>{
    const topRatedList=
 listOfRes.filter((restaurant)=>
    parseFloat(restaurant.info.avgRatingString) >= 4.3
 );
// setList(topRatedList);
setTemp(topRatedList);
 //console.log(topRatedList);
 }}>
    Top Rated</button>

</div>

<div className="restoCard">
    {
    tempList.map(restaurant=>
    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>   
    )
    }
   
</div>
</div>
    )}
export default Body;