import { Link } from "react-router-dom";
import logo from "../assets/Eastery/logo.svg";
import heroTestimonial from "../assets/Eastery/heroTestimonial.png";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
// import Cookies from "js-cookie";

const Header = () => {
  const [show, setShow] = useState(false);
  const [usershow, setUserShow] = useState(false);
  const handleMenuShow = () => {
    setShow(!show);
  };
  const handleUserShow = () => {
    console.log("Just overed");
    setUserShow(!usershow);
  };
  //const user = Cookies.get("pulse_user");
  const user = true;
  return (
    <header className="bg-purple-50">
      <div className="flex items-center justify-between px-6 py-3">
        <nav className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h3 className="font-bold text-lg">EASTERY</h3>
          </Link>
          <nav className=" flex items-center gap-3 font-semibold tab:hidden">
            <Link className="hover:text-purple-600 active:text-blue-400" to="/">
              Rent
            </Link>
            <Link className="hover:text-purple-600 active:text-blue-400" to="/">
              Buy
            </Link>
            <Link className="hover:text-purple-600 active:text-blue-400" to="/">
              Sell
            </Link>
            <Link
              className="hover:text-purple-600 active:text-blue-400"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-purple-600 active:text-blue-400"
              to="/store"
            >
              Store
            </Link>
          </nav>
        </nav>

        {user ? (
          <nav
            id="user-header"
            className="cursor-pointer tab:hidden relative"
            onClick={handleUserShow}
          >
            <img
              src={heroTestimonial}
              className="h-14 w-14 rounded-full"
              alt=""
            />
            <div
              id="user-modal"
              className={`absolute font-semibold z-50  shadow border rounded-xl px-7 py-5 gap-3 -left-20 top-[4.2rem] ${
                usershow ? "flex" : "hidden"
              } transition-all bg-white items-center flex-col`}
            >
              <Link to="/profile" className="hover:text-purple-400">
                Profile
              </Link>
              <Link to="/settings" className="hover:text-purple-400">
                Settings
              </Link>
              <button
                type="button"
                className="hover:text-purple-400 cursor-pointer"
              >
                Log out
              </button>
            </div>
          </nav>
        ) : (
          <nav className="flex items-center gap-4 font-semibold tab:hidden">
            <Link className="" to="/sign-in">
              <button
                className="px-4 py-2 text-slate-600 rounded-md outline-none border border-purple-700"
                type="button"
              >
                Login
              </button>
            </Link>
            <Link className="" to="/register">
              <button
                className="bg-purple-700 px-4 py-2 rounded-md outline-none border border-purple-700 text-white"
                type="button"
              >
                Sign up
              </button>
            </Link>
          </nav>
        )}
        <AiOutlineMenu
          onClick={handleMenuShow}
          className=" hidden cursor-pointer tab:block font-black text-2xl"
        />
      </div>

      <div
        className={`fixed hidden tab:flex flex-col gap-5  w-full px-5  bg-purple-50 overflow-y-hidden pt-6 top-0 z-50 h-screen bottom-5 ${
          show ? "animation" : "hide-animation"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h3 className="font-bold text-lg">EASTERY</h3>
          </Link>
          <AiOutlineCloseCircle
            className=" cursor-pointer font-black text-2xl"
            onClick={handleMenuShow}
          />
        </div>
        <div className="flex flex-col gap-5 font-medium">
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link to="/">Rent</Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link to="/">Buy</Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link to="/">Sell</Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link className="" to="/about">
              About
            </Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link className="" to="/store">
              Store
            </Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link className="" to="/sign-in">
              <button
                className="px-4 py-2 text-slate-600 rounded-md outline-none border border-purple-700"
                type="button"
              >
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
