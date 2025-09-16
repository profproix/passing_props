import { restaurants } from "../data/data.js";

import Restaurant from "./Restaurant.jsx";

//Containers are for behind the scenes logic
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.name} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
