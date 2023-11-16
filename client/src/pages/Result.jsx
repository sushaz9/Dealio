import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const API_KEY = import.meta.env.VITE_LOCATION_KEY;

export default function Result({ favourites, setFavourites }) {
  const params = useParams();
  const [result, setResult] = useState({});
  const [location, setLocation] = useState({});
  const [showMap, setShowMap] = useState(false);
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(false);

  useEffect(() => {
    getResult();
  }, []);

  async function getResult() {
    try {
      const API = `http://localhost:8080/results/${params.id}`;
      const res = await axios.get(API);
      setResult(res.data);

      // Check if the current result is already in favourites
      const isAlreadyAdded = favourites.some((fav) => fav._id === res.data._id);
      setIsAddedToFavourites(isAlreadyAdded);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleMap(event) {
    event.preventDefault();

    const API_location = `http://localhost:8080/map?address=${result.address}`;
    const res = await axios.get(API_location);
    setLocation(res.data);
    setShowMap(true);
  }

  const handleFavourite = () => {
    // Check if the result is already in favourites
    const isAlreadyAdded = favourites.some((fav) => fav._id === result._id);

    if (!isAlreadyAdded) {
      // If not, add to favourites
      setFavourites([...favourites, result]);
      localStorage.setItem(
        "favourites",
        JSON.stringify([...favourites, result])
      );
      setIsAddedToFavourites(true); // Update the state to disable the button
    }
  };

  return (
    <div id="fav">
      <div className="resultDiv" key={result._id}>
        <h2>{result.businessName}</h2>
        <h3>{result.offer}</h3>
        <img src={result.businessImage} alt="Business" id="fav-image" />
        <h3>{result.address}</h3>

        {result.voucher && (
          <div>
            <h4>QR Code:</h4>
            <QRCode value={result.offer} />
          </div>
        )}

        {result.address && <button onClick={handleMap}>View Map</button>}

        {/* Button to add to favourites */}
        <button onClick={handleFavourite} disabled={isAddedToFavourites}>
          {isAddedToFavourites ? "Added to Favourites" : "Add to Favourites"}
        </button>

        {showMap && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.latitude},${location.longitude}&zoom=20&markers=${location.latitude},${location.longitude}|icon:large-blue-cutout&format=png&markers=icon:large-blue-cutout`}
            alt="Location Map"
          />
        )}
      </div>
    </div>
  );
}
