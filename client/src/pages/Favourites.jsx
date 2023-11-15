import { useEffect } from "react";

const Favourites = ({ favourites, setFavourites }) => {
  console.log("Favourites component mounted");

  useEffect(() => {
    // Retrieve favorites from local storage when the component mounts
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavourites(JSON.parse(storedFavorites));
    }
  }, []); // Ensure the effect runs only on mount

  const handleRemoveFavorite = (removedFavorite) => {
    // Update state to remove the specified favorite
    setFavourites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite !== removedFavorite)
    );

    const updatedFavorites = favourites.filter(
      (favorite) => favorite !== removedFavorite
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      {favourites.map((favourite) => {
        return (
          <div key={favourite._id}>
            <h2>{favourite.businessName}</h2>

            <img src={favourite.logoImage} alt={favourite.businessName} />
            <h3>{favourite.location}</h3>
            <h3>{favourite.discountDay}</h3>
            <h3>{favourite.category}</h3>
            <h3>{favourite.offer}</h3>
            <img src={favourite.businessImage} alt={favourite.businessName} />
            <button onClick={() => handleRemoveFavorite(favourite)}>
              Remove from Favorites
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
