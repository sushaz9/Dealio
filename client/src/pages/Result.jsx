import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Result({}) {
  const [result, setResult] = useState({});

  const params = useParams();

  useEffect(() => {
    getResult();
  }, []);

  async function getResult() {
    try {
      const API = `http://localhost:8080/results/${params.id}`;
      const res = await axios.get(API);
      setResult(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log("working?");

  return (
    <div key={result._id}>
      <h2>{result.businessName}</h2>
      <h3>{result.offer}</h3>
      <img src={result.businessImage} alt="Business" />
      <h3>{result.location}</h3>
    </div>
  );
}

//add a map, add addresses
