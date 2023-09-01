import { useState, useContext, useEffect, useRef } from "react";
import apartment from "../assets/apartment.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetchEstates();
  }, []);

  const fetchEstates = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/estates");
      const data = await response.json();
      setEstates(data);
    } catch (error) {
      console.error("Error fetching estates:", error);
    }
  };

  const uniqueCategories = [
    ...new Set(estates.map((estate) => estate.category)),
  ];

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const activeStyles = {
    fontWeight: "bold",
    color: "#2D8B95",
  };

  return (
    <nav className="bg-[#150E06] py-3 px-4 lg:px-10 flex flex-row items-center justify-between">
      <Link className="hidden lg:flex flex-row items-center">
        <img src={apartment} alt="apartment" className="w-12" />
        <h1 className="text-white text-lg md:text-2xl font-bold">
          realtyhome.ng
        </h1>
      </Link>

      <div className="hidden lg:flex flex-row items-center gap-4 md:gap-8">
        <ul className="flex flex-row items-center gap-4 text-sm text-white font-semibold">
          <div className="flex flex-row item items-center gap-4">
            {uniqueCategories.map((category) => (
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                key={category}
                to={`/category/${category}`}
                className="hover:border-b border-white hover:p-1 capitalize"
              >
                {category}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="women"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <li className="hover:border-b border-white hover:p-1">Agent</li>
          </NavLink>

          <NavLink
            to="women"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <li className="hover:border-b border-white hover:p-1">Blog</li>
          </NavLink>
        </ul>

        <Link
          to="create"
          className="bg-white/20 hover:bg-white hover:text-black py-2 px-4 font-semibold text-white"
        >
          Post a Property
        </Link>
        <div className="lg:flex hidden">
          <Menu handleClick={handleClick} setToggleNav={setToggleNav} />
        </div>
      </div>

      <SideMenu />
    </nav>
  );
};

function Menu({ handleClick, setToggleNav }) {
  const { user } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      window.location.reload(); // Reload the page to require the user to log in again
    }
  };

  return (
    <ul className="">
      <li
        className="cursor-pointer"
        onClick={() => {
          {
            handleClick();
          }
          setToggleNav(false);
        }}
      >
        {user ? (
          <button
            className="lg:bg-red-700  text-white  font-semibold rounded-lg lg:py-2 lg:px-5  text-semibold lg:text-xs text-md "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className=" flex gap-2  items-center ">
            <span className="text-white font-semibold">Sign Up</span>
            <span className="text-white font-semibold">Sign In</span>
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
