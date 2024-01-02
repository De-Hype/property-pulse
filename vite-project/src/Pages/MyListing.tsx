//Here, we will only show the listings of that particular user

import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart_Five from "../assets/Cart_Five.jpg";
import Cart_One from "../assets/Cart_One.jpg";
import Cart_Two from "../assets/Cart_Two.jpg";
import Cart_Three from "../assets/Cart_Three.jpg";
import Cart_Four from "../assets/Cart_Four.jpg";
import Cart_Six from "../assets/Cart_Six.jpg";
import Cart_Seven from "../assets/Cart_Seven.jpg";

const MyListing = () => {
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center flex-col">
        <h3 className="text-center font-bold text-gray-600 text-2xl">
          No listings found
        </h3>
        <Link
          to="/"
          className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
        >
          <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
        </Link>
      </div> */}
      <div className="flex flex-col gap-6 py-4 px-5">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
          >
            <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
          </Link>
        </div>
        <h3 className="text-center font-bold text-3xl  text-yellow-950">
          My Listing
        </h3>
        <div className="grid grid-cols-4 gap-7">
          <Link to="/">
            <img src={Cart_Five} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_Five} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>

          <Link to="/">
            <img src={Cart_Five} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_One} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_Two} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_Three} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_Four} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_Six} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
          <Link to="/">
            <img src={Cart_Seven} className="h-52 w-80 hover:scale-x-110" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyListing;
