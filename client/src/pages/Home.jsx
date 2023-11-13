import Featured from "../components/Featured";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src="" />

      <p>Dealio</p>
      <label></label>
      <select>
        <option> Liverpool </option>
      </select>
      <div id="results"></div>

      <Featured />
    </div>
  );
}

// filter, map through results

export default Home;
