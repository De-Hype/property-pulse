
import { MdFavoriteBorder } from "react-icons/md";

import Cart_One from "../assets/Cart_One.jpg";
import Cart_Two from "../assets/Cart_Two.jpg";
import Cart_Three from "../assets/Cart_Three.jpg";
import Cart_Four from "../assets/Cart_Four.jpg";
import Cart_Five from "../assets/Cart_Five.jpg";
import { Link } from "react-router-dom";
import Cart_Six from "../assets/Cart_Six.jpg";
import Header from "../Components/Header";
import { useState } from "react";
import Footer from "../Components/Footer";

const SearchResultListing = () => {
  const [input, setInput] = useState("");
  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="w-full flex flex-col overflow-x-hidden ">
      <Header />
      <div className="flex items-center flex-col min-h-[80vh] bg-[#f1eeee] ">
        <div className="flex items-center tab:w-full justify-center pt-10 mb-5 px-5">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white px-3 py-3 flex min-w-[600px] rounded-md tab:flex-col tab:bg-inherit tab:gap-3 tab:min-w-full"
          >
            <input
              type="text"
              name="newsletter"
              id="newsletter"
              placeholder="Search products here..."
              onChange={(e) => setInput(e.target.value)}
              className=" bg-inherit text-[#080614] w-full outline-none py-2 px-4 tab:bg-white tab:py-4 tab:rounded-lg tab:border tab:border-[#7065F0]"
            />
            <input
              type="button"
              className="bg-[#7065F0] rounded-lg cursor-pointer transition-all hover:bg-purple-800 text-white font-medium px-5 py-2 tab:py-3"
              value="Search"
            />
          </form>
        </div>
        <div className="w-full flex flex-col gap-4 self-start pb-5 px-5">
          <div className="flex gap-2">
            <h3 className="font-bold">Type:</h3>
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="rent" id="rent" />
                <span>Rent</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" name="sell" id="sell" />
                <span>Sales</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <h3 className="font-bold">Property Type:</h3>
            <div className="flex items-center gap-3 justify-between">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="School" id="school" />
                <span>School</span>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="houses" id="houses" />
                <span>Houses</span>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="hotels" id="hotels" />
                <span>Hotels</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-3 py-4 self-start min-h-[80vh] ">
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-col sm:gap-7 tab:grid-cols-2 ">
            <Link
              to="/about/2"
              className="bg-white rounded-md cursor-pointer  transition-all hover:bg-white hover:shadow-md hover:border"
            >
              <img src={Cart_One} className="h-[190px] w-full" alt="" />
              <div className="flex flex-col gap-1 bg-white px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-purple-600 font-bold text-lg">
                      $2,095
                    </h3>
                    <p className="text-slate-500 text-sm">/month</p>
                  </div>
                  <div className="px-2 py-2 border rounded-full">
                    <MdFavoriteBorder className=" text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Palm Harbour</h3>
                <p className="text-xs text-slate-700">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </Link>
            <Link
              to="/about/2"
              className="bg-white rounded-md h-full cursor-pointer transition-all hover:bg-white hover:shadow-md hover:border"
            >
              <img src={Cart_Two} className="h-[190px] w-full" alt="" />
              <div className="flex flex-col gap-1 bg-white px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-purple-600 font-bold text-lg">
                      $2,095
                    </h3>
                    <p className="text-slate-500 text-sm">/month</p>
                  </div>
                  <div className="px-2 py-2 border rounded-full">
                    <MdFavoriteBorder className=" text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Palm Harbour</h3>
                <p className="text-xs text-slate-700">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </Link>
            <Link
              to="/about/2"
              className="bg-white rounded-md cursor-pointer transition-all hover:bg-white hover:shadow-md hover:border"
            >
              <img src={Cart_Three} className="h-[190px] w-full" alt="" />
              <div className="flex flex-col gap-1 bg-white px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-purple-600 font-bold text-lg">
                      $2,095
                    </h3>
                    <p className="text-slate-500 text-sm">/month</p>
                  </div>
                  <div className="px-2 py-2 border rounded-full">
                    <MdFavoriteBorder className=" text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Palm Harbour</h3>
                <p className="text-xs text-slate-700">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </Link>
            <Link
              to="/about/2"
              className="bg-white rounded-md cursor-pointer transition-all hover:bg-white hover:shadow-md hover:border"
            >
              <img src={Cart_Four} className="h-[190px] w-full" alt="" />
              <div className="flex flex-col gap-1 bg-white px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-purple-600 font-bold text-lg">
                      $2,095
                    </h3>
                    <p className="text-slate-500 text-sm">/month</p>
                  </div>
                  <div className="px-2 py-2 border rounded-full">
                    <MdFavoriteBorder className=" text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Palm Harbour</h3>
                <p className="text-xs text-slate-700">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </Link>
            <Link
              to="/about/2"
              className="bg-white rounded-md cursor-pointer transition-all hover:bg-white hover:shadow-md hover:border"
            >
              <img src={Cart_Five} className="h-[190px] w-full" alt="" />
              <div className="flex flex-col gap-1 bg-white px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-purple-600 font-bold text-lg">
                      $2,095
                    </h3>
                    <p className="text-slate-500 text-sm">/month</p>
                  </div>
                  <div className="px-2 py-2 border rounded-full">
                    <MdFavoriteBorder className=" text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Palm Harbour</h3>
                <p className="text-xs text-slate-700">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </Link>
            <Link
              to="/about/2"
              className="bg-white rounded-md cursor-pointer transition-all hover:bg-white hover:shadow-md hover:border"
            >
              <img src={Cart_Six} className="h-[190px] w-full" alt="" />
              <div className="flex flex-col gap-1 bg-white px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="text-purple-600 font-bold text-lg">
                      $2,095
                    </h3>
                    <p className="text-slate-500 text-sm">/month</p>
                  </div>
                  <div className="px-2 py-2 border rounded-full">
                    <MdFavoriteBorder className=" text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Palm Harbour</h3>
                <p className="text-xs text-slate-700">
                  2699 Green Valley, Highland Lake, FL
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className=" bg-[#7065F0] sm:w-full flex justify-center items-center rounded-md">
              <button
                className=" px-4 py-2 rounded-md outline-none  text-white tab:"
                type="button"
              >
                Browse Properties
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SearchResultListing;
