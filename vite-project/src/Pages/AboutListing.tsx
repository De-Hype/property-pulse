import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart_One from "../assets/Cart_One.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const AboutListing = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <div className="flex items-center py-6 flex-col gap-6">
        <Link
          to="/store"
          className="flex font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
        >
          <AiOutlineHome className="text-2xl" /> <span>Go Back</span>
        </Link>
        <div className="w-full px-4 flex items-center  gap-4 tab:flex-col relative">
          <div className="h-[500px] tab:h-[270px] w-1/2 tab:w-full">
            <img src={Cart_One} className="h-full w-full" alt="" />
          </div>
          <div className="w-1/2  tab:w-full flex items-center flex-col gap-3">
            <h3 className="text-xl font-bold">Palm Harbour</h3>
            <address>2699, Green Valley, Highland Lake, Fl</address>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat deleniti quae commodi ipsa illum aspernatur officiis nisi
              sapiente culpa? Minus quis aut impedit id! Natus dolorum incidunt
              nulla voluptatibus!
            </p>
            <div className="flex items-center">
              <h3 className="text-purple-600 font-bold text-lg">$2,095</h3>
              <p className="text-slate-500 text-sm">/month</p>
            </div>
            <div className="flex items-center justify-between gap-5">
              <p className="">
                Rooms <span>2</span>
              </p>
              <p className="">
                Rooms <span>2</span>
              </p>
              <p className="">
                Rooms <span>2</span>
              </p>
            </div>
            <button
              type="button"
              className="bg-purple-700 px-5 py-2 font-bold text-white rounded-md"
            >
              Make Payment
            </button>
          </div>
          <span className="absolute bg-purple-700 text-white font-bold rounded-r-lg left-0 px-5 py-2 top-5">
            Rent
          </span>
        </div>
      </div>
      <div className="bg-purple-50">
        <Footer />
      </div>
    </div>
  );
};

export default AboutListing;
