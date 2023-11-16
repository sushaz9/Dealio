import React from "react";
import Form from "../components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export default function FormPage() {
  const [deals, setDeals] = useState([]);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div class="form-text" id="discount">
        <h2>Add a discount!</h2>
        <h3>Control Your Deals, Control Your Brand</h3>
        <p>
          Offering a seamless deal and discount management platform. The
          simplest way to expand your customer base and efficiently manage your
          restaurant deals. Trust Dealio to provide all the tools you need.
        </p>
      </div>
      <img id="form-img" src="../src/assets/unsplash/staff1.png" />
      <div className="discount" id="formpagediscount"></div>
      {isAuthenticated && <Form deals={deals} setDeals={setDeals} />}
    </>
  );
}
