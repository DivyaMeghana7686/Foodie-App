import React from "react";
import ReactDOM from "react-dom";

const Header = () =>{
    return (
        <div className="header border">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.logodesign.net%2Flogo%2Fsmoking-burger-with-lettuce-3624ld.png&tbnid=hXdeg1sHFMWVNM&vet=12ahUKEwi9_dKRkbODAxWFk2MGHeFmApgQMygKegQIARBg..i&imgrefurl=https%3A%2F%2Fwww.logodesign.net%2Flogos%2Ffood&docid=DXiwq17-71YNeM&w=405&h=309&q=food%20app%20logo%20ideas&ved=2ahUKEwi9_dKRkbODAxWFk2MGHeFmApgQMygKegQIARBg"
                    alt="image"
                />
            </div>
            <div className="nav-items">
                <p>Home</p>
                <p>About Us</p>
                <p> Contact Us</p>
                <p>Cart</p>
            </div>
        </div>
    );
};

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);