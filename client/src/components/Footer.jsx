import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div id="linksFooter">
        <h3>Explore</h3>
        <Link to="about">About Us</Link>
        <Link to="formpage">Add a Discount</Link>
      </div>
      <p>
        Created by Andy Fennell, Susie Harrison, Luke Reynolds and Cordelia
        Snape as part of the Tech Educators Full Stack MERN Bootcamp.
      </p>

      <p>Dealio &copy; 2023</p>
    </footer>
  );
}
