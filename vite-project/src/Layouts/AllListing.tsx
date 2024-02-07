import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOtherHouses } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { FaCarRear, FaCcVisa } from "react-icons/fa6";
const AllListing = () => {
  return (
    <div className="mt-7 bg-white px-1 tablet:px-3 py-1 tablet:py-4 rounded-md flex items-center gap-5 shadow-sm border">
        <div className="flex items-center gap-1">
            <span className="text-sm tablet:text-xl font-semibold">See all listings</span>
            <FaLongArrowAltRight className='text-yellow-400 text-sm tablet:text-xl'/>
        </div>

        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-2">
            <span className="text-sm tablet:text-xl font-bold ">250+ Houses</span>
            <MdOtherHouses className='font-bold text-sm tablet:text-lg'/>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tablet:text-xl">10+ Schools</span>
            <FaSchool className='font-bold text-sm tablet:text-lg'/>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tablet:text-xl">5+ Car Parks</span>
            <FaCarRear className='font-bold text-sm tablet:text-lg'/>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tablet:text-xl">3+ ATM</span>
            <FaCcVisa className='font-bold text-sm tablet:text-lg'/>
          </div>
        </div>
    </div>
  )
}

export default AllListing