import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";

export const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <a href="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
      </a>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton>
          <Search
            onClick={() => {
              navigate(`/properties/search/${search}`)}}
            sx={{ color: variables.orange }}
          />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user ? (
          <a href="/create-listing" className="host">
            Nestease Your Home
          </a>
        ) : (
          <a href="/login" className="host">
            Nesease your home
          </a>
        )}

        <IconButton
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
          disableRipple
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile img"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </IconButton>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`${process.env.REACT_APP_SERVER_URL}`}>Home</Link>
            <Link to="/create-listing">Become A Host</Link>
            <hr />

            <Link to={`/${user._id}/trips`}>Trip List</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Property List</Link>
            <Link to={`/${user._id}/reservations`}>Reservation List</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
