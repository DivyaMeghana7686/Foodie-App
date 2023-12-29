import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import resObjs from "../utils/mockData";
import { DATA_URL } from "../utils/constants";

const Body=()=>{
    const [listObjs, setListObjs]=useState(resObjs.restaurants);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();
        console.log(json);
        setListObjs(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
    

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