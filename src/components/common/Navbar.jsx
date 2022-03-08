import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

import { navItems } from "./navItems";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../../app/userSlice";
import { logout } from "../../app/loginSlice";
import { logoutUser } from "../../services/logoutService";

function NavBar(props) {
  const [showMenu, setSHowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const refMenuButton = useRef();
  const { firstName, roles } = useSelector((state) => state.loadUser.value);
  const role = roles.find((r) => r.roleName === "ADMIN") ? "ADMIN" : "USER";
  let location = useLocation().pathname;
  location = location.includes("/home")
    ? ""
    : "home" + location.replace(/\//g, ">").replace(/-/g, " ");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    dispatch(resetUser());
    dispatch(logout());
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (refMenuButton.current && !refMenuButton.current.contains(e.target)) {
        setSHowMenu(false);
      }
    };
    document.addEventListener("mouseup", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutside);
    };
  });

  const handleInputChange = (e) => {
    setSearchInput(e.currentTarget.value);
  };

  return (
    <Fragment>
      <div className="fixed z-50 top-0 w-full flex flex-row justify-end items-center h-12 tracking-wider font-sans bg-gradient-to-r from-sky-800 to-cyan-600 text-white">
        <div className="fixed left-2 top-0 flex flex-row items-center h-12">
          <img src={props.logoLink} alt="logo" className="h-5/6 items-center" />
          <span className="ml-2 italic text-white font-semibold tracking-normal text-base sm:text-lg">
            {"Request & Issue Tracker"}
          </span>
        </div>
        <nav
          className={
            "flex flex-col items-center absolute h-fit w-full bg-gradient-to-r from-sky-700 to-cyan-500 top-12 " +
            "md:flex md:flex-row md:justify-end md:static md:top-0 md:h-12 md:bg-gradient-to-r md:from-sky-800 md:to-cyan-600 " +
            ((showMenu && "block") || "hidden")
          }
        >
          {navItems.map((item, index) => (
            <div
              key={index.toString()}
              className="min-w-[7rem] py-1 text-center hover:bg-cyan-500/25"
            >
              <Link
                to={item.url === "/home" ? `${item.url}/${role}` : item.url}
              >
                {item.title}
              </Link>
            </div>
          ))}
          <div className="min-w-[7rem] py-1 text-center text-base italic underline text-amber-200 hover:bg-cyan-500/25">
            <Link to={`/home/${role}`}>{`@${firstName}`}</Link>
          </div>
          <div className="w-fit px-4 py-1 text-2xl cursor-pointer text-red-400 hover:bg-cyan-500/25">
            <IoMdLogOut onClick={handleLogout} />
          </div>
        </nav>
        <button
          className={`p-3 stroke-1 text-2xl hover:bg-cyan-500/25 md:hidden ${
            showMenu && "bg-cyan-500/25"
          }`}
          onClick={() => setSHowMenu(!showMenu)}
          ref={refMenuButton}
        >
          <VscMenu />
        </button>
      </div>
      <div className="fixed z-40 top-12 py-4 px-12 w-full flex flex-col justify-between bg-gradient-to-r from-sky-700 to-cyan-500 text-white md:flex-row md:justify-between md:items-center">
        <section className="inline-block mb-4 align-middle mr-8 text-sm italic capitalize md:mb-0">
          {location}
        </section>
        <section className="inline-block align-middle min-w-[170px] h-8 text-black bg-white border shadow-md border-gray-300 rounded-md sm:min-w-[240px]">
          <input
            id="search-input"
            onChange={handleInputChange}
            placeholder="Search..."
            className="p-2 inline-block align-middle w-5/6 h-full text-black placeholder-gray-400 focus:outline-none focus:border-none focus:ring-0 rounded-l-md text-xs"
          />
          <Link
            to={"/search-results"}
            state={{ searchInput }}
            className="inline-block align-middle w-1/6 h-full p-1.5 stroke-gray-500 hover:cursor-pointer"
          >
            <IoSearchOutline />
          </Link>
        </section>
      </div>
      <div className="mt-36 md:mt-24"></div>
    </Fragment>
  );
}

export default NavBar;
