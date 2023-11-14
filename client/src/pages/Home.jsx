// import Featured from "../components/Featured";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "../components/Form";

function Home() {
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");
  const [deals, setDeals] = useState([]);
  const [discountDay, setDay] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
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
  }

  function handleCategoryFilter(event) {
    event.preventDefault();
    setCategory(event.target.value);
  }

  function handleDayFilter(event) {
    event.preventDefault();
    setDay(event.target.value);
  }

  const filteredResults = results.filter(function (result) {
    return (
      (result.location === location || location === "") &&
      (result.category === category || category === "") &&
      (result.discountDay === discountDay || discountDay === "")
    );
  });

  return (
    <div>
      {/* <img src="" /> */}
      <p>Dealio</p>
      <form onChange={handleLocationFilter}>
        <label>Filter by location:</label>
        <select>
          <option value=""> All </option>
          <option value="UK wide"> UK Wide </option>
          <option value="Manchester"> Manchester </option>
          <option value="Liverpool"> Liverpool </option>
        </select>
      </form>

      <form onChange={handleCategoryFilter}>
        <label>Filter by category:</label>
        <select>
          <option value=""> All </option>
          <option value="Fast food"> Fast Food </option>
          <option value="Japanese"> Japanese </option>
          <option value="Street food"> Street Food </option>
          <option value="Fine dining"> Fine Dining </option>
        </select>
      </form>

      <form onChange={handleDayFilter}>
        <label>Filter by day of discount:</label>
        <select>
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

      <div id="results">
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
        <Form deals={deals} setDeals={setDeals} />;
      </div>
    </div>
  );
}

export default Home;
