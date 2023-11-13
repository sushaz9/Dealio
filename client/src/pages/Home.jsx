// import Featured from "../components/Featured";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getResults();
  }, []);

  async function getResults() {
    const API = `http://localhost:8080/results`;
    const res = await axios.get(API);
    setResults(res.data);
  }

  function handleFilter(event) {
    event.preventDefault();
    setLocation(event.target.value);
  }

  const filteredResults = results.filter(function (result) {
    return result.location === location || location === "";
  });

  return (
    <div>
      {/* <img src="" /> */}
      <p>Dealio</p>
      <form onChange={handleFilter}>
        <label>Filter by location:</label>
        <select>
          <option value=""> All </option>
          <option value="Manchester"> Manchester </option>
          <option value="Liverpool"> Liverpool </option>
        </select>
      </form>
      <div id="results">
        {filteredResults.map((result) => {
          return (
            <div key={result._id}>
              <h2>{result.businessName}</h2>
              <img src={result.logoImage} alt={result.businessName} />
              <h3>{result.location}</h3>
              <h3>{result.discountDay}</h3>
              <h3>{result.category}</h3>
              <h3>{result.offercod}</h3>
              <img src={result.businessImage} alt={result.businessName} />
            </div>
          );
        })}
      </div>
      <div id="featured-deals">
        <h2>FEATURED DEALS</h2>
        <Slider autoplay={true} autoplaySpeed={4000}>
          {filteredResults.map((result) => {
            return (
              <div key={result._id}>
                <h2>{result.businessName}</h2>
                <img src={result.logoImage} alt={result.businessName} />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <Featured /> */}
    </div>
  );
}

// filter, map through results

export default Home;
