interface RestaurantProps {
    name: string;
    rating: number;
    image: string;
  }
  
  const RestaurantCard: React.FC<RestaurantProps> = ({ name, rating, image }) => {
    return (
      <div className="border p-4 rounded-lg">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <p>Rating: {rating}</p>
      </div>
    );
  };
  export default RestaurantCard;
  