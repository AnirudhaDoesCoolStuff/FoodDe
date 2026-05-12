import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants")
    console.log(data)
    const response = await data.json();
    setListOfRestaurants(response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurants(response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(response)
  }



  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.5,
    );
    setfilteredRestaurants(filteredRestaurants);
  };

  const filterRes = () => {
    let searchRes = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log(searchRes)

    setfilteredRestaurants(searchRes)

  }


  if(listOfRestaurants.length === 0) {
    return (
      <h1> Loadinnnnnnnnnggggggggggggggggggg </h1>
    )
  }

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" value={searchText} onChange={(e)=> {
          setSearchText(e.target.value)
        }}/>

        <button onClick={filterRes}>Search</button>
        <button className="top-restro-btn" onClick={filterRestaurants}>
          {" "}
          Top Rated Restrurant{" "}
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
