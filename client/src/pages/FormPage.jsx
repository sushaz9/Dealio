import React from "react";
import Form from "../components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export default function FormPage() {
  const [deals, setDeals] = useState([]);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <h2>Add a discount!</h2>
      <div className="discount" id="formpagediscount"></div>
      {isAuthenticated && <Form deals={deals} setDeals={setDeals} />}
    </>
  );
}
