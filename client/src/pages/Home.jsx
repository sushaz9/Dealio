// import Featured from "../components/Featured";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "../components/Form";

function Home({ favourites, setFavourites }) {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");
  const [discountDay, setDay] = useState("");
  const [category, setCategory] = useState("");
  const [showFilteredResults, setShowFilteredResults] = useState(false); // New state

  // Uses useNavigate for navigation (rather than Link in the button)
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavourites(JSON.parse(storedFavorites));
    }
    getResults();
  }, []);

  async function getResults() {
    const API = `http://localhost:8080/results`;
    const res = await axios.get(API);
    setResults(res.data);
  }

  function handleLocationFilter(event) {
    event.preventDefault();
    setLocation(event.target.value);
    handleFilterChange();
  }

  function handleCategoryFilter(event) {
    event.preventDefault();
    setCategory(event.target.value);
    handleFilterChange();
  }

  function handleDayFilter(event) {
    event.preventDefault();
    setDay(event.target.value);
    handleFilterChange();
  }

  // function 'handleFavourite' takes result parameter and logs message to console. The updates favourites state by creating new array, which includes existing favourites and adds new result.
  const handleFavourite = (result) => {
    console.log("Adding to favourites:", result);
    setFavourites([...favourites, result]);
    localStorage.setItem("favorites", JSON.stringify([...favourites, result]));
  };

  const filteredResults = results.filter(function (result) {
    return (
      (result.location === location || location === "") &&
      (result.category === category || category === "") &&
      (result.discountDay === discountDay || discountDay === "")
    );
  });

  console.log("Favourites state before link:", favourites);

  const handleShowFilteredResults = () => {
    setShowFilteredResults(true);
  };

  const handleFilterChange = () => {
    // Reset the showFilteredResults state when filters change
    setShowFilteredResults(false);
  };

  return (
    <div>
      {/* <img src="" /> */}
      <p>Dealio</p>
      <form onChange={handleLocationFilter}>
        <label>Filter by location:</label>
        <select name="location">
          <option value=""> All </option>
          <option value="UK wide"> UK Wide </option>
          <option value="Manchester"> Manchester </option>
          <option value="Liverpool"> Liverpool </option>
        </select>
      </form>

      <form onChange={handleCategoryFilter}>
        <label>Filter by category:</label>
        <select name="category">
          <option value=""> All </option>
          <option value="Fast food"> Fast Food </option>
          <option value="Japanese"> Japanese </option>
          <option value="Street food"> Street Food </option>
          <option value="Fine dining"> Fine Dining </option>
          <option value="Bar"> Bar </option>
          <option value="Pub"> Pub </option>
        </select>
      </form>

      <form onChange={handleDayFilter}>
        <label>Filter by day of discount:</label>
        <select name="discountday">
          <option value=""> All </option>
          <option value="Weekday"> All Weekdays </option>
          <option value="Weekend"> All Weekend Days </option>
          <option value="Monday"> Monday </option>
          <option value="Tuesday"> Tuesday </option>
          <option value="Wednesday"> Wednesday </option>
          <option value="Thursday"> Thursday </option>
          <option value="Friday"> Friday </option>
          <option value="Saturday"> Saturday </option>
          <option value="Sunday"> Sunday </option>
        </select>
      </form>

      {/* Button to show filtered results */}
      <button onClick={handleShowFilteredResults}>Show Filtered Results</button>

      {/* Display filtered results only if the button is clicked */}
      {showFilteredResults && (
        <div id="results">
          {/* Add H2 tag when there are filtered results */}
          {filteredResults.length > 0 && <h2>Results</h2>}
          {filteredResults.map((result) => {
            return (
              <div key={result._id}>
                <Link to={`/results/${result._id}`}>
                  <h2>{result.businessName}</h2>
                </Link>
                <img src={result.logoImage} alt={result.businessName} />
                <h3>{result.location}</h3>
                <h3>{result.discountDay}</h3>
                <h3>{result.category}</h3>
                <h3>{result.offer}</h3>
                <img src={result.businessImage} alt={result.businessName} />
                {/* Add favourite button. Triggers function. Arrow fuction passes result parameter to the function. */}
                <button onClick={() => handleFavourite(result)}>
                  Favourite
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div id="featured-deals">
        <h2>FEATURED DEALS</h2>
        <Slider autoplay={true} autoplaySpeed={4000}>
          {results.map((result) => {
            return (
              <div key={result._id}>
                <Link to={`/results/${result._id}`}>
                  <h2>{result.businessName}</h2>
                </Link>
                <img src={result.logoImage} alt={result.businessName} />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* Pass favourites to Favourites component. Passes the object with a state property, which contains favourites array. Should be accessible in Favourites.jsx through props. */}
      <button
        onClick={() => navigate("/favourites", { state: { favourites } })}
      >
        Go to Favourites
      </button>
    </div>
  );
}

export default Home;
