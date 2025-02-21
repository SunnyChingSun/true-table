import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">Welcome to Real Eats</h2>
      <p className="text-center mt-2">Find out the real best restaurants!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <RestaurantCard name="Sample Restaurant" rating={4.5} image="/restaurant_image.jpg" />
      </div>
    </div>
  );
};
export default Home;
