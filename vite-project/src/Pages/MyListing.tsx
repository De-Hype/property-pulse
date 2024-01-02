//Here, we will only show the listings of that particular user

import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyListing = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h3 className="text-center font-bold text-gray-600 text-2xl">No listings found</h3>
      <Link
          to="/"
          className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
        >
          <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
        </Link>
      </div>
      {/* <div className="flex items-center flex-col gap-6">
        <Link
          to="/"
          className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
        >
          <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
        </Link>

        <h3 className="text-center font-bold text-3xl  text-yellow-950">
          My Listing
        </h3>
      </div> */}
    </>
  );
};

export default MyListing;
