import { Link } from "react-router-dom";
// import Header from "../Components/Header";
import Cart_Six from "../assets/Cart_Six.jpg";
import {
  AiFillCar,
  AiFillShop,
  AiOutlineHome,
  AiOutlineNumber,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="flex w-full items-center justify-center gap-3 flex-col">
      <Link
        to="/"
        className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
      >
        <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
      </Link>
      <div className="flex items-center w-2/3 gap-4 px-2 py-2 justify-center flex-col rounded-md shadow-sm  border">
        <div className="w-full ">
          <div className="">
            <h3 className="text-center font-bold text-2xl text-slate-800 my-5">
              Listing Poster Details
            </h3>
            <div className="flex items-center gap-6 px-4">
              <img src={Cart_Six} className="rounded-full h-20 w-20" alt="" />
              <div className="">
                <h3 className="font-extrabold flex gap-3 text-slate-900">
                  Listing poster:
                  <span className="font-semibold">David Hype</span>
                </h3>
                <h3 className="font-extrabold flex gap-3 text-slate-900">
                  Poster address:
                  <span className="font-semibold">64 Udoumana street</span>
                </h3>
                <h3 className="font-extrabold flex gap-3 text-slate-900">
                  Total listings posted:
                  <Link className="font-semibold" to="/">
                    2
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <form
            className="w-full flex items-center gap-2 justify-center flex-col "
            action=""
          >
            <textarea
              name=""
              className="w-full resize-none border-slate-600 border outline-none px-3 py-2 rounded-md"
              placeholder="Enter message here..."
              id=""
              // cols="30"
              // rows="10"
            ></textarea>
            <button
              type="submit"
              className="border bg-yellow-600 w-full py-2 rounded-md text-white hover:bg-yellow-800 "
            >
              Send Message To Email
            </button>
          </form>
        </div>
      </div>
      <div className="w-full px-7 flex flex-col mt-4 gap-4">
        <h3 className="text-2xl font-extrabold">Related Listings</h3>
        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="max-w-sm max-h-64 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
            <img src={Cart_Six} alt="" className="w-full h-3/4 rounded-t-xl" />
            <div className="w-full h-full bg-red-400">
              <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
              <div className="flex items-center justify-between px-3 pb-1">
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
              <div className="grid grid-cols-3 place-content-center border-t px-3">
                <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                  <AiFillShop />
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                  <AiFillCar />
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                  <AiOutlineNumber />
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm max-h-64 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
            <img src={Cart_Six} alt="" className="w-full h-3/4 rounded-t-xl" />
            <div className="w-full h-full bg-red-400">
              <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
              <div className="flex items-center justify-between px-3 pb-1">
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
              <div className="grid grid-cols-3 place-content-center border-t px-3">
                <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                  <AiFillShop />
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                  <AiFillCar />
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                  <AiOutlineNumber />
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-sm max-h-64 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
            <img src={Cart_Six} alt="" className="w-full h-3/4 rounded-t-xl" />
            <div className="w-full h-full bg-red-400">
              <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
              <div className="flex items-center justify-between px-3 pb-1">
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
              <div className="grid grid-cols-3 place-content-center border-t px-3">
                <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                  <AiFillShop />
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                  <AiFillCar />
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                  <AiOutlineNumber />
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
