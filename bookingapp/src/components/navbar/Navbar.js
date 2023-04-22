import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  // console.log(user);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h3 className="logo"><b>BookMyStay</b></h3>
        </Link>
        {user ? (
          <div>
            <span>Hello, {user.username}</span>
            <button className="navButton" onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <a href="/register"><button className="navButton">Register</button></a>
            <a href="/login"><button className="navButton">Login</button></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
