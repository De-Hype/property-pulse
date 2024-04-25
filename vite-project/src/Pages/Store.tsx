import Header from "../Components/Header";
import Hero_assets from "../assets/Hero_assets.jpg";
import {
  //AiFillCar,
  //AiFillShop,
  // AiOutlineNumber,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart_Six from "../assets/Cart_Six.jpg";
import Footer from "../Components/Footer";
const Store = () => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="">
        <img
          src={Hero_assets}
          alt=""
          className="min-h-[250px] brightness-50 w-full"
        />
        <div className="absolute  bottom-0 left-0 right-0 top-0">
          <Header />
          <div className="mt-10 flex items-center justify-center">
            <h3 className="text-center font-bold text-3xl  text-white">
              Store
            </h3>
          </div>
        </div>
      </div>
      <div className="">
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
      <Footer />
    </div>
  );
};

export default Store;
