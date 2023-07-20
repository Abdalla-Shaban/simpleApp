import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">E-Commerce</Link>
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
