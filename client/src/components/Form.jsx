import { useState } from "react";
import axios from "axios";

export default function Form({ deals, setDeals, deal, setDeal }) {
  const [formData, setFormData] = useState(
    deal ?? {
      businessName: "",
      offer: "",
      discountDay: "",
      location: "",
      category: "",
      businessImage: "",
      logoImage: "",
    }
  );

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function addDeal(event) {
    event.preventDefault();
    const API = "http://localhost:8080/results";
    const res = await axios.post(API, formData);
    setDeals([...deals, res.data]);
  }

  async function updateDeal(event) {
    event.preventDefault();
    const API = `http://localhost:8080/results/${deal._id}`;
    await axios.put(API, formData);
    setDeal(formData);
  }

  return (
    <form onSubmit={deal?.businessName ? updateDeal : addDeal}>
      <input
        name="businessName"
        placeholder="Business Name"
        onChange={handleChange}
        value={formData.businessName}
      />
      <input
        name="offer"
        placeholder="Offer"
        onChange={handleChange}
        value={formData.offer}
      />
      <input
        name="discountDay"
        placeholder="Discount Day"
        onChange={handleChange}
        value={formData.discountDay}
      />
      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        value={formData.location}
      />
      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
        value={formData.category}
      />
      <input
        name="businessImage"
        placeholder="Business Image"
        onChange={handleChange}
        value={formData.businessImage}
      />
      <input
        name="logoImage"
        placeholder="Logo Image"
        onChange={handleChange}
        value={formData.logoImage}
      />
      <button>{deal?.businessName ? "Update Deal" : "Add Deal"}</button>
    </form>
  );
}
