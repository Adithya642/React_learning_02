import React from "react";
import ReactDOM from "react-dom/client";

  const AppLayoutComp=()=>{
    return (
        <div className="app"  >
            <Header/>
            <Body/>
        </div>
    )
  }

  const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Track</li>
                    <li>Orders</li>
                </ul>
            </div>
        </div>
    )
  }

  

    const RestaurantCard=()=>{
        return(
            <div className="RestoContainer" style={{
                backgroundColor:"#f0f0f0"
              }}>
                <img alt="Our Items" className="foodImg" style={{width:"100px"}} src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg"/>
                <h3> Bloom Bawarchi</h3>
                <h4> Biryani, NorthIndian, Chinese</h4>
                <h4>4.5 stars</h4>
                <h4>30min</h4> 
            </div>
        )
    }

    const Body=()=>{
        return (
    <div className="Body">
    <div className="Search">Search</div>
    <div className="restoCard">
    <RestaurantCard/>
    </div>
    </div>
        )}
 const initial=ReactDOM.createRoot(document.getElementById("root"));
 initial.render(<AppLayoutComp/>);