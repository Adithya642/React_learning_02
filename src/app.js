import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header.js';
import Body from './components/Body.js';
import Demo from './components/fetch.js';
//import RestaurantCard from "./components/RestaurantCard.js"
import resObj from "./utils/mock.js";
  const AppLayoutComp=()=>{
    return (
        <div className="app"  >
            <Header/>
            <Body/>
        
        </div>
    )
  }
 const initial=ReactDOM.createRoot(document.getElementById("root"));
 initial.render(<AppLayoutComp/>);