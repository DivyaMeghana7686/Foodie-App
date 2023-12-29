import {LOGO_URL} from "../utils/constants";
const Header=()=>{
    return(
        <div className="header border">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={LOGO_URL}
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

export default Header;