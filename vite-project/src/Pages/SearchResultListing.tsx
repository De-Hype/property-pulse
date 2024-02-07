import {
  //AiFillCar,
  //AiFillShop,
 // AiOutlineNumber,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart_Six from "../assets/Cart_Six.jpg";
import Header from "../Components/Header";

const SearchResultListing = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden ">
      <Header dark />
      <div className="flex items-center flex-col min-h-[80vh] px-5">
        <div className="w-full flex flex-col gap-4 self-start pb-5">
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
        <div className="w-full px-3 py-4 self-start min-h-[80vh] bg-[#f1eeee]">
          <div className="grid grid-cols-1 phones:grid-cols-2 laptop:grid-cols-3 gap-4 w-full  h-full">
            <div className=" w-full  max-h-64 cursor-pointer bg-white py-2 shadow-sm border  rounded-xl">
              <img
                src={Cart_Six}
                alt=""
                className="w-full h-3/4 rounded-t-xl hover:scale-90"
              />
              <div className="w-full  h-1/4 ">
                <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
                <div className="flex w-full items-center  justify-between pt-1 px-3 pb-1">
                  <Link
                    to="/contact/1/1"
                    className="bg-black flex items-center text-white px-2"
                  >
                    <AiOutlinePhone />
                    Contact
                  </Link>
                  <Link to="/" className="flex items-center px-2 bg-yellow-500">
                    <AiOutlineShoppingCart />
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full  max-h-64 cursor-pointer bg-white py-2 shadow-sm border  rounded-xl">
              <img
                src={Cart_Six}
                alt=""
                className="w-full h-3/4 rounded-t-xl hover:scale-90"
              />
              <div className="w-full  h-1/4 ">
                <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
                <div className="flex w-full items-center  justify-between pt-1 px-3 pb-1">
                  <Link
                    to="/contact/1/1"
                    className="bg-black flex items-center text-white px-2"
                  >
                    <AiOutlinePhone />
                    Contact
                  </Link>
                  <Link to="/" className="flex items-center px-2 bg-yellow-500">
                    <AiOutlineShoppingCart />
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full  max-h-64 cursor-pointer bg-white py-2 shadow-sm border  rounded-xl">
              <img
                src={Cart_Six}
                alt=""
                className="w-full h-3/4 rounded-t-xl hover:scale-90"
              />
              <div className="w-full  h-1/4 ">
                <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
                <div className="flex w-full items-center  justify-between pt-1 px-3 pb-1">
                  <Link
                    to="/contact/1/1"
                    className="bg-black flex items-center text-white px-2"
                  >
                    <AiOutlinePhone />
                    Contact
                  </Link>
                  <Link to="/" className="flex items-center px-2 bg-yellow-500">
                    <AiOutlineShoppingCart />
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full  max-h-64 cursor-pointer bg-white py-2 shadow-sm border  rounded-xl">
              <img
                src={Cart_Six}
                alt=""
                className="w-full h-3/4 rounded-t-xl hover:scale-90"
              />
              <div className="w-full  h-1/4 ">
                <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
                <div className="flex w-full items-center  justify-between pt-1 px-3 pb-1">
                  <Link
                    to="/contact/1/1"
                    className="bg-black flex items-center text-white px-2"
                  >
                    <AiOutlinePhone />
                    Contact
                  </Link>
                  <Link to="/" className="flex items-center px-2 bg-yellow-500">
                    <AiOutlineShoppingCart />
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full  max-h-64 cursor-pointer bg-white py-2 shadow-sm border  rounded-xl">
              <img
                src={Cart_Six}
                alt=""
                className="w-full h-3/4 rounded-t-xl hover:scale-90"
              />
              <div className="w-full  h-1/4 ">
                <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
                <div className="flex w-full items-center  justify-between pt-1 px-3 pb-1">
                  <Link
                    to="/contact/1/1"
                    className="bg-black flex items-center text-white px-2"
                  >
                    <AiOutlinePhone />
                    Contact
                  </Link>
                  <Link to="/" className="flex items-center px-2 bg-yellow-500">
                    <AiOutlineShoppingCart />
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full  max-h-64 cursor-pointer bg-white py-2 shadow-sm border  rounded-xl">
              <img
                src={Cart_Six}
                alt=""
                className="w-full h-3/4 rounded-t-xl hover:scale-90"
              />
              <div className="w-full  h-1/4 ">
                <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
                <div className="flex w-full items-center  justify-between pt-1 px-3 pb-1">
                  <Link
                    to="/contact/1/1"
                    className="bg-black flex items-center text-white px-2"
                  >
                    <AiOutlinePhone />
                    Contact
                  </Link>
                  <Link to="/" className="flex items-center px-2 bg-yellow-500">
                    <AiOutlineShoppingCart />
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultListing;
