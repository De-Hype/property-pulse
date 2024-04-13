//The h3 should be an animation that says 
//Find your next place to study
//Find your next place to Travel
import { FaAngleDown } from "react-icons/fa6";
import {AiFillCar, AiFillShop, AiOutlineNumber, AiOutlineShoppingCart, AiOutlinePhone} from 'react-icons/ai';
import Cart_One from "../assets/Cart_One.jpg";
import Cart_Two from "../assets/Cart_Two.jpg";
import Cart_Three from "../assets/Cart_Three.jpg";
import Cart_Four from "../assets/Cart_Four.jpg";
import Cart_Five from "../assets/Cart_Five.jpg";
import Cart_Six from "../assets/Cart_Six.jpg";
import { Link } from "react-router-dom";
const NextPlace = () => {
  return (
    <div className="px-20 tab:px-5 bg-slate-50 py-16 ">
      <span></span>
      <h3 className="font-bold text-2xl">Find your next place to live</h3>
      <div className="grid grid-cols-4 shadow-lg my-7 border tablet:px-3 px-1 rounded-md">
        <div className="flex items-center gap-2 border-r py-2 tablet:py-5 cursor-pointer ">
          <span className="font-bold  text-xs tablet:tex-base">Looking for</span> 
          <FaAngleDown className='text-sm'/>
        </div>
        <div className="flex items-center gap-2 border-r pl-2 cursor-pointer">
          <span className="font-bold text-xs tablet:tex-base">Location</span>
          <FaAngleDown className='text-sm'/>
        </div>
        <div className="flex items-center gap-2 border-r pl-2 cursor-pointer">
          <span className="font-bold text-xs tablet:tex-base">Property type</span>
          <FaAngleDown className='text-sm'/>
        </div>
        <div className="flex items-center gap-2 pr-2  cursor-pointer">
          <span className="font-bold text-xs tablet:tex-base">Price</span>
          <FaAngleDown className='text-sm'/>
        </div>
      </div>
      <div className=" grid  grid-cols-1 tablet:grid-cols-2 w-full gap-3 ">

        <div className="max-w-xl max-h-80 cursor-pointer  flex flex-col shadow-sm border  rounded-xl">
          <img src={Cart_One} alt="" className="w-full h-2/3 rounded-t-xl" />
          <div className="w-full h-full">
            <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
            <div className="flex items-center justify-between px-3 pb-1">
              <Link to='/contact/1/1' className="bg-black flex items-center text-white px-2"> <AiOutlinePhone/>Contact </Link>
              <Link to='/' className="flex items-center px-2 bg-yellow-500"><AiOutlineShoppingCart/>Purchase</Link>
            </div>
            <div className="grid grid-cols-3 place-content-center border-t px-3">
              <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                <AiFillShop/>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                <AiFillCar/>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                <AiOutlineNumber/>
                <span className="font-semibold">3</span>
              </div>
            </div>
            
          </div>
        </div>

        <div className="max-w-xl max-h-80 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
          <img src={Cart_Two} alt="" className="w-full h-2/3 rounded-t-xl" />
          <div className="w-full h-full">
            <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
            <div className="flex items-center justify-between px-3 pb-1">
            <Link to='/contact/1/1' className="bg-black flex items-center text-white px-2"> <AiOutlinePhone/>Contact </Link>
              <Link to='/' className="flex items-center px-2 bg-yellow-500"><AiOutlineShoppingCart/>Purchase</Link>
            </div>
            <div className="grid grid-cols-3 place-content-center border-t px-3">
              <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                <AiFillShop/>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                <AiFillCar/>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                <AiOutlineNumber/>
                <span className="font-semibold">3</span>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-xl max-h-80 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
          <img src={Cart_Three} alt="" className="w-full h-2/3 rounded-t-xl" />
          <div className="w-full h-full">
            <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
            <div className="flex items-center justify-between px-3 pb-1">
            <Link to='/contact/1/1' className="bg-black flex items-center text-white px-2"> <AiOutlinePhone/>Contact </Link>
              <Link to='/' className="flex items-center px-2 bg-yellow-500"><AiOutlineShoppingCart/>Purchase</Link>
            </div>
            <div className="grid grid-cols-3 place-content-center border-t px-3">
              <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                <AiFillShop/>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                <AiFillCar/>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                <AiOutlineNumber/>
                <span className="font-semibold">3</span>
              </div>
            </div>
            
          </div>
        </div>

        <div className="max-w-xl max-h-80 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
          <img src={Cart_Four} alt="" className="w-full  h-2/3 rounded-t-xl" />
          <div className="w-full h-full">
            <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
            <div className="flex items-center justify-between px-3 pb-1">
            <Link to='/contact/1/1' className="bg-black flex items-center text-white px-2"> <AiOutlinePhone/>Contact </Link>
              <Link to='/' className="flex items-center px-2 bg-yellow-500"><AiOutlineShoppingCart/>Purchase</Link>
            </div>
            <div className="grid grid-cols-3 place-content-center border-t px-3">
              <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                <AiFillShop/>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                <AiFillCar/>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                <AiOutlineNumber/>
                <span className="font-semibold">3</span>
              </div>
            </div>
            
          </div>
        </div>

        <div className="max-w-xl max-h-80 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
          <img src={Cart_Five} alt="" className="w-full h-2/3 rounded-t-xl" />
          <div className="w-full h-full">
            <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
            <div className="flex items-center justify-between px-3 pb-1">
            <Link to='/contact/1/1' className="bg-black flex items-center text-white px-2"> <AiOutlinePhone/>Contact </Link>
              <Link to='/' className="flex items-center px-2 bg-yellow-500"><AiOutlineShoppingCart/>Purchase</Link>
            </div>
            <div className="grid grid-cols-3 place-content-center border-t px-3">
              <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                <AiFillShop/>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                <AiFillCar/>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                <AiOutlineNumber/>
                <span className="font-semibold">3</span>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-xl  max-h-80 cursor-pointer flex flex-col shadow-sm border  rounded-xl">
          <img src={Cart_Six} alt="" className="h-2/3 w-full rounded-t-xl" />
          <div className="w-full h-full">
            <h3 className="pl-3 py-1 font-bold">Multer Rooms</h3>
            <div className="flex items-center justify-between px-3 pb-1">
            <Link to='/contact/1/1' className="bg-black flex items-center text-white px-2"> <AiOutlinePhone/>Contact </Link>
              <Link to='/' className="flex items-center px-2 bg-yellow-500"><AiOutlineShoppingCart/>Purchase</Link>
            </div>
            <div className="grid grid-cols-3 place-content-center border-t px-3">
              <div className="flex items-center pl-2 gap-2 pt-2 pb-3 border-r">
                <AiFillShop/>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex gap-2  pl-2  pt-2 items-center pb-3 border-r">
                <AiFillCar/>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex gap-2 pt-2 pl-2 pb-3 items-center">
                <AiOutlineNumber/>
                <span className="font-semibold">3</span>
              </div>
            </div>
            
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default NextPlace