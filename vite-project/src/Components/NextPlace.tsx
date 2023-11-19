//The h3 should be an animation that says 
//Find your next place to study
//Find your next place to Travel
import { FaAngleDown } from "react-icons/fa6";
const NextPlace = () => {
  return (
    <div className="px-20">
      <span></span>
      <h3 className="font-bold text-2xl">Find your next place to live</h3>
      <div className="grid grid-cols-4 shadow-lg my-4 border px-3 rounded-md">
        <div className="flex items-center gap-2 border-r py-5 cursor-pointer ">
          <span className="font-bold">Looking for</span>
          <FaAngleDown className='text-sm'/>
        </div>
        <div className="flex items-center gap-2 border-r pl-2 cursor-pointer">
          <span className="font-bold">Location</span>
          <FaAngleDown className='text-sm'/>
        </div>
        <div className="flex items-center gap-2 border-r pl-2 cursor-pointer">
          <span className="font-bold">Property type</span>
          <FaAngleDown className='text-sm'/>
        </div>
        <div className="flex items-center gap-2 pl-2  cursor-pointer">
          <span className="font-bold">Price</span>
          <FaAngleDown className='text-sm'/>
        </div>
      </div>
      <div className="">
        <div className="">
          <img src="" alt="" className="" />
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default NextPlace