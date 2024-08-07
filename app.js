import React from "react";
import ReactDOM from "react-dom/client";

//  const head=React.createElement("h1",
//  {id:"head"},
//  "reatc is rendered here");
//jsx codes are formatted so that browswers could understand -by parsel
 const Heading=()=>{
    return (<h1 className="head" tabIndex="5">
    react is rendered1
    </h1>)};
    //componenet composition
const HeadComponent=()=>(
        <div id="container">
            {Heading()}
            <Heading/>
            <Heading></Heading>
         <h1> Hello namasthe</h1>
        </div>
);
  
 const initial=ReactDOM.createRoot(document.getElementById("root"));
 initial.render(<HeadComponent/>);