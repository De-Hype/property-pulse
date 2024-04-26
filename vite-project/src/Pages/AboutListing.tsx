import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart_One from "../assets/Cart_One.jpg";
const AboutListing = () => {
  return (
    <div className="flex items-center flex-col gap-6 min-h-screen">
      <Link
        to="/store"
        className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
      >
        <AiOutlineHome className="text-2xl" /> <span>Go Back</span>
      </Link>
      <div className="w-full flex bg-red-500">
        <div className=""><img src={Cart_One} alt="" /></div>
        <div className="">A</div>
      </div>
    </div>
  );
};

export default AboutListing;
