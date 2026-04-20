import { useState } from "react";
import { resObj } from "../helper/utils";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resObj.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  );

  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4,
    );
    setListOfRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="top-restro-btn" onClick={filterRestaurants}>
          {" "}
          Top Rated Restrurant{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
