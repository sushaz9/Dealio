import { useState } from "react";
import axios from "axios";

export default function Form({ deals, setDeals, deal, setDeal }) {
  const [formData, setFormData] = useState(
    book ?? {
      businessName: "",
      offer: "",
      discountDay: "",
      location: "",
      category: "",
      businessImage: "",
      logoImage: "",
    }
  );
}

function handleChange(event) {
  setFormData({ ...formData, [event.target.name]: event.target.value });
}

async function addDeal(event) {
  event.preventDefault();
  const API = "http://localhost:8080/";
  const res = await axios.post(API, formData);
  setBooks([...books, res.data]);
}
