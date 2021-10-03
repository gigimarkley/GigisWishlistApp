import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      <img id="wishlistLogo" src="./favicon.ico"></img>
      <div>
        <h1 id="siteName">Gigi's Wishlist</h1>
      </div>

      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link id="navBarLink" to="/home">
            Home
          </Link>
          <Link id="navBarLink" to="/wishlist">
            Wishlists{" "}
          </Link>
          <Link id="navBarLink" to="/account">
            Account Info
          </Link>
          <a id="navBarLink" href="#" onClick={handleClick}>
            Logout
          </a>
          {/* <Link>Your Friends </Link> */}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link id="navBarLink" to="/login">
            Login
          </Link>
          <Link id="navBarLink" to="/signup">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
