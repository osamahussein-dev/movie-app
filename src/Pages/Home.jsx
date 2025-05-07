import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Movie Explorer</h1>
        <Link to="/movies" className="explore-button">
          Explore Movies
        </Link>
      </div>
    </div>
  );
}

export default Home;
