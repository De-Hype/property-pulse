import { Link } from "react-router-dom";
import logo from "../assets/Eastery/logo.svg";

import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleMenuShow = () => {
    setShow(!show);
  };
  return (
    <div className="bg-purple-50">
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
            <Link className="hover:text-purple-600 active:text-blue-400" to="/">
              Manage property
            </Link>
            <Link className="hover:text-purple-600 active:text-blue-400" to="/">
              Blog
            </Link>
          </nav>
        </nav>
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
        <AiOutlineMenu
          onClick={handleMenuShow}
          className=" hidden tab:block font-black text-2xl"
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
            className="  font-black text-2xl"
            onClick={handleMenuShow}
          />
        </div>
        <div className="flex flex-col gap-5 font-medium">
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link to="/register">Rent</Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link to="/">Buy</Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link to="/">Sell</Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link className="" to="/">
              Manage property
            </Link>
          </p>
          <p className="text-center hover:text-purple-600 active:text-blue-400">
            <Link className="" to="/blog">
              Blog
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
    </div>
  );
};

export default Header;
