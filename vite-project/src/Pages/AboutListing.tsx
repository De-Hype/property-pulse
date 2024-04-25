
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart_One from "../assets/Cart_One.jpg";
//Here we will have the picture of the listing
//Here we will have a few text about the listing
const AboutListing = () => {
  return (
    <div className="flex items-center flex-col gap-6 min-h-screen">
    <Link
      to="/" 
      className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
    >
      <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
    </Link>
    <h3 className="text-center font-bold text-3xl  text-yellow-950">
      About Listing
    </h3>
    <div className="flex justify-between gap-4 px-3 ">
      <img src={Cart_One} alt="" className="h-1/3" />
      <div className="flex items-center flex-col">
        <h3 className="">2024 Complex Duplex</h3>
      </div>
    </div>
    </div>
  )
}

export default AboutListing