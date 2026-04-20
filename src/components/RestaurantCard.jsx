const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/5e4633a3-c7cd-45f6-ad24-6dc6070e58c1_17301.JPG"
        className="img-card"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
