//@ts-nocheck
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineHome, AiOutlineKey, AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import Cart_One from "../assets/Cart_One.jpg";
import Cart_Two from "../assets/Cart_Two.jpg";
import Cart_Three from "../assets/Cart_Three.jpg";
import Cart_Four from "../assets/Cart_Four.jpg";
import Cart_Five from "../assets/Cart_Five.jpg";
import Cart_Six from "../assets/Cart_Six.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeProperty } from "../Redux/productSlice";
const MarketPlace = () => {
  const homeProduct = useSelector((state) => state.product.home_product);
  const isLoading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  console.log(`Error is ${error}`);
  console.log(homeProduct);
  console.log(`Loading is ${isLoading}`);
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const handleLocationSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
  };
  useEffect(() => {
    dispatch(fetchHomeProperty());
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-up" className="sm:mt-4 bg-slate-50 py-8">
      <h3 className="text-center font-bold text-lg">Based on your location</h3>
      <p className="text-sm text-slate-700 text-center">
        Some of our picked properties near your location
      </p>
      <div className=" px-20 tab:px-5 gap-4 py-10">
        <div className="flex items-center justify-between  tab:flex-col tab:gap-5">
          <div className="tab:w-full flex text-slate-800 items-center justify-between px-3 py-2 gap-2 bg-slate-200 border border-slate-300 rounded-md">
            <button
              className="flex gap-1 font-medium text-lg  sm:text-base items-center justify-between"
              type="button"
            >
              <AiOutlineKey /> <span>Rent</span>{" "}
            </button>
            <button
              className="flex gap-1 font-medium text-lg sm:text-base items-center justify-between bg-white px-3 py-1 rounded-md text-purple-600"
              type="button"
            >
              <AiOutlineKey /> <span>Buy</span>{" "}
            </button>
            <button
              className="flex gap-1 font-medium text-lg sm:text-base items-center justify-between "
              type="button"
            >
              <AiOutlineHome /> <span>Sell</span>{" "}
            </button>
          </div>
          <form
            onSubmit={handleLocationSubmit}
            className=" tab:w-full h-12 relative py-3 px-5 bg-slate-200 border border-slate-300 rounded-md tab:block"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Location..."
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-b-md pl-10 bg-inherit  pr-5 h-full outline-none border-none"
            />
            <AiOutlineSearch className="absolute text-purple-600 text-xl top-[30%] bottom-[30%] left-[10px]" />
          </form>
        </div>
        <div className="mt-8">
          {homeProduct && (
            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-col sm:gap-7 tab:grid-cols-2 ">
              {homeProduct.data?.product?.map((value, index) => (
                <div
                  key={index}
                  className="rounded-md cursor-pointer  transition-all hover:bg-white hover:shadow-md hover:border"
                >
                  <img
                    src={value.imageUrls}
                    className="h-[190px] w-full"
                    alt=""
                  />
                  <div className="flex flex-col gap-1 bg-white px-2 py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <h3 className="text-purple-600 font-bold text-lg">
                          ${value.price}
                        </h3>
                        <p className="text-slate-500 text-sm">/month</p>
                      </div>
                      <div className="px-2 py-2 border rounded-full">
                        <MdFavoriteBorder className=" text-purple-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{value.name}</h3>
                    <p className="text-xs text-slate-700">{value.address}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isLoading && (
            <div className="h-[200px] w-full flex items-center justify-center">
              <h3 className="text-center">Loading Items</h3>
            </div>
          )}
          {error && (
            <div className="h-[200px] w-full flex items-center justify-center">
              <h3 className="text-center text-red-500">
                An Error Occured while fetching items
              </h3>
            </div>
          )}
          <div className="flex items-center justify-center mt-10">
            <Link
              className=" bg-[#7065F0] sm:w-full flex justify-center items-center rounded-md"
              to="/store"
            >
              <button
                className=" px-4 py-2 rounded-md outline-none  text-white tab:"
                type="button"
              >
                Browse Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
