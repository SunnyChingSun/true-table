const Navbar = () => {
    return (
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-xl">Real Eats</h1>
        <input
          type="text"
          placeholder="Search for a restaurant..."
          className="p-2 rounded"
        />
      </nav>
    );
  };
  export default Navbar;
  