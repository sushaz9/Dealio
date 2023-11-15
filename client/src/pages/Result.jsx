import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code"; // Import the QRCode component

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

  return (
    <div key={result._id}>
      <h2>{result.businessName}</h2>
      <h3>{result.offer}</h3>
      <img src={result.businessImage} alt="Business" />
      <h3>{result.address}</h3>

      {result.voucher && (
        <div>
          <h4>QR Code:</h4>
          <QRCode value={result.offer} />
        </div>
      )}
    </div>
  );
}
