import RestaurantCard from "./RestaurantCard";
import { useState  } from "react";
import resObjs from "../utils/mockData";

const Body=()=>{
    const [listObjs, setListObjs]=useState(resObjs.restaurants);

    return (
        <div className="body">
            <div className="search_bar">
                <input placeholder="Select Foods" className="search-input border"/>
                <div className="search-icon border">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="filter">
                    <button 
                        className="btn"
                        onClick={() => {
                            const filteredList= listObjs.filter(
                                (restaurant) => restaurant.info.avgRating > 4
                            );
                            setListObjs(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container">
                {
                   listObjs.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                   ))
                }
            </div>
        </div>
    )
};

export default Body;