import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import apartment from "../assets/apartment.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";

const SideMenu = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [estates, setEstates] = useState([]); // Change initial state to null

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

  return (
    <nav className="lg:hidden flex w-full flex-row items-center justify-between">
      <Link className="flex flex-row items-center">
        <img src={apartment} alt="apartment" className="w-8" />
        <h1 className="text-white text-lg  font-bold">realtyhome.ng</h1>
      </Link>

      <div>
        <BiMenu
          color="#fff"
          fontSize={30}
          onClick={() => setToggleMenu(true)}
          className="hover:border  border-white rounded-md hover:p-1"
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full bg-[#150E06] flex flex-col z-[5]">
            <AiOutlineClose
              fontSize={27}
              className="text-[40px] text-white cursor-pointer absolute top-[20px] right-[20px] hover:border  border-white rounded-md hover:p-2 "
              onClick={() => setToggleMenu(false)}
            />

            <div className="flex flex-col items-start pt-20 text-white text-2xl">
              <ul className="flex flex-col w-full">
                <div className="flex flex-col w-full ">
                  {uniqueCategories.map((category) => (
                    <NavLink
                      key={category}
                      to={`/category/${category}`}
                      className=" border-t border-white py-3 pl-3 hover:bg-white hover:text-black capitalize"
                    >
                      {category}
                    </NavLink>
                  ))}
                </div>

                <li
                  onClick={() => setToggleMenu(false)}
                  className="border-b border-t border-white py-3 pl-3 hover:bg-white hover:text-black"
                >
                  Agent
                </li>
                <li
                  onClick={() => setToggleMenu(false)}
                  className="border-b border-white py-3 pl-3 hover:bg-white hover:text-black"
                >
                  Blog
                </li>
              </ul>

              <Link
                to="create"
                onClick={() => setToggleMenu(false)}
                className="border-b border-white py-3 pl-3 w-full hover:bg-white hover:text-black"
              >
                Post a Property
              </Link>
              <div
                onClick={() => setToggleMenu(false)}
                className="border-b border-white  w-full"
              >
                <Menu handleClick={handleClick} setToggleNav={setToggleNav} />
              </div>
            </div>
          </div>
        )}
      </div>
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
            className="border-b border-white py-3 pl-3 w-full "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className=" flex flex-col items-start ">
            <span className="w-full flex border-b border-white py-3 pl-3 hover:bg-white hover:text-black">
              Sign Up
            </span>
            <span className="w-full flex border-b border-white py-3 pl-3 hover:bg-white hover:text-black">
              Sign In
            </span>
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default SideMenu;
