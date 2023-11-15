const Favourites = ({ location = {}, favourites, setFavourites }) => {
  console.log("Favourites component mounted");

  // Takes location prop (provided by React Router) and extracts the state property. Logs info to console and checks if there are any favourites in the state.
  /*  const { state } = location; */
  /*  console.log("Favourites state:", state);

  // If no favourites in the state, renders below message
  if (!state || !state.favourites || state.favourites.length === 0) {
    console.log("No favourites selected.");
    return <div>No favourites selected.</div>;
  } */

  return (
    <div>
      <h2>Favourites Page</h2>
      <ul>
        {favourites.map((favourite) => (
          <li key={favourite._id}>{favourite.businessName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
