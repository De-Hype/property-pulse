//@ts-nocheck
import Header from "../Components/Header";
import Hero_assets from "../assets/Hero_assets.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import Cart_One from "../assets/Cart_One.jpg";
import Cart_Two from "../assets/Cart_Two.jpg";
import Cart_Three from "../assets/Cart_Three.jpg";
import Cart_Four from "../assets/Cart_Four.jpg";
import Cart_Five from "../assets/Cart_Five.jpg";
import { Link, useNavigate } from "react-router-dom";
import Cart_Six from "../assets/Cart_Six.jpg";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import Filter from "../Components/Filter";
import {
  decrementPage,
  incrementPage,
  storeListing,
} from "../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterState } from "../Redux/actionSlice";
import { toast } from "sonner";
import Loader from "../Components/Loader";
const Store = () => {
  const [input, setInput] = useState("");
  const [filterNumber, setFilterNumber] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filterClicked = useSelector((state: any) => state.action.filterClicked);
  const store_listing = useSelector(
    (state: any) => state.product.store_listing
  );
  const isLoading = useSelector((state: any) => state.product.loading);
  const currentPage = useSelector((state) => state.product.currentPage);
  const error = useSelector((state: any) => state.product.error);

  useEffect(() => {
    dispatch(storeListing({ page: currentPage }));
  }, [currentPage]);
  const OpenModal = () => {
    dispatch(changeFilterState());
    setFilterNumber(2);
  };
  const SeeMoreProduct = () => {
    if (store_listing.data.results.length == 6) {
      dispatch(incrementPage());
    } else if (store_listing.data.results.length != 6) {
      dispatch(decrementPage());
    }
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (input == "")
      return toast.success("Please provide a valid search query");
    navigate(`/search?q=${input.toLowerCase()}`);
    console.log(input);
  };
  return (
    <div className="relative">
      <div
        className={`overflow-hidden min-h-screen ${
          filterClicked ? "blur" : "blur-none"
        } `}
      >
        <div className="">
          <img
            src={Hero_assets}
            alt=""
            className="max-h-[450px] brightness-50 w-full"
          />
          <div className="absolute  bottom- left-0 right-0 top-0">
            <Header />
            <div className="mt-10 flex items-center justify-center">
              <h3 className="text-center font-bold text-3xl  text-white">
                Estatery Store
              </h3>
            </div>
          </div>
        </div>
        <div className="px-3 pb-8 bg-purple-50">
          <div className="flex items-center justify-between tab:flex-col pt-10">
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
                onClick={handleSearchSubmit}
                type="button"
                className="bg-[#7065F0] rounded-lg cursor-pointer transition-all hover:bg-purple-800 text-white font-medium px-5 py-2 tab:py-3"
                value="Search"
              />
            </form>
            <div onClick={OpenModal} className=" relative my-5">
              <AiOutlineFilter className="text-4xl cursor-pointer" />
              <span className="absolute bg-purple-900 rounded-full text-white py-1 px-2 font-semibold top-4 left-5">
                {filterNumber}
              </span>
            </div>
          </div>
          <div className="mt-8">
            {store_listing && (
              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-col sm:gap-7 tab:grid-cols-2 ">
                {store_listing.data.results.results.map((value, index) => (
                  <Link
                    to={`/about/${value.id}`}
                    className="bg-white rounded-md cursor-pointer  transition-all hover:bg-white hover:shadow-md hover:border"
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
                  </Link>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="h-[250px] w-full flex items-center justify-center">
                <Loader />
              </div>
            )}
            {error && (
              <div className="h-[200px] w-full flex items-center justify-center">
                <h3 className="text-center text-red-500">
                  An error occured while fetching store items
                </h3>
              </div>
            )}
            {store_listing && (
              <div className="flex items-center justify-center mt-10">
                <div
                  onClick={SeeMoreProduct}
                  className=" bg-[#7065F0] sm:w-full flex justify-center items-center rounded-md"
                >
                  <button
                    className=" px-4 py-2 rounded-md outline-none  text-white tab:"
                    type="button"
                  >
                    Browse Properties
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
      <Filter />
    </div>
  );
};

export default Store;
