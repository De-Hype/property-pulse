
import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-router-dom"
//Here we will have the picture of the listing
//Here we will have a few text about the listing
const AboutListing = () => {
  return (
    <div className="flex items-center flex-col gap-6">
    <Link
      to="/" 
      className="flex mt-5 font-bold text-slate-600 items-center gap-1 hover:text-yellow-700 hover:underline"
    >
      <AiOutlineHome className="text-2xl" /> <span>Go Home</span>
    </Link>

    <h3 className="text-center font-bold text-3xl  text-yellow-950">
      Create A Listing
    </h3>
    </div>
  )
}

export default AboutListing