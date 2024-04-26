import { AiOutlineSearch } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import renters from "../assets/Eastery/renters.svg";
import properties from "../assets/Eastery/properties.svg";
import quotation from "../assets/Eastery/quotation.svg";
import logo from "../assets/Eastery/logo.svg";
import heroImg from "../assets/Eastery/heroImg.png";
import heroTestimonial from "../assets/Eastery/heroTestimonial.png";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const Hero = () => {
  const [counterState, setCounterState] = useState(false)
  return (
    <div className="pl-12 pt-9 tab:px-3 tab:py-4 bg-purple-100  flex tab:flex-col">
      <div className="w-1/2 tab:text-center tab:w-full flex flex-col gap-3">
        <div className="flex flex-col gap-4 ">
          <h3 className="text-6xl tab:text-4xl font-bold">
            Buy, rent or sell <br /> your property <br /> easily
          </h3>
          <p className="font-medium text-base text-slate-600">
            A great platform to buy, sell or even rent your <br /> properties
            without any commmisions
          </p>
        </div>
        <div className=" w-full ">
          <div className="self-start tab:self-auto bg-transparent">
            <div className="bg-white hidden tab:grid tab:grid-cols-3 font-medium  rounded-md ">
              <button
                type="button"
                className="py-2 px-2 text-purple-700 border-b-2 border-purple-700"
              >
                Rent
              </button>
              <button type="button" className="py-2 px-2">
                Buy
              </button>
              <button type="button" className="py-2 px-2">
                Sell
              </button>
            </div>

            <form className=" w-full h-16 relative rounded-b-md tab:block">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Location..."
                className="w-full rounded-b-md pl-5 bg-white pr-10 h-full outline-none border-none"
              />
              <AiOutlineSearch className="absolute text-lg top-[40%] bottom-[40%] right-[10px]" />
            </form>
          </div>
        </div>
        <ScrollTrigger onEnter={()=> setCounterState(true)} onExit={()=> setCounterState(false)}>   
        <div className="grid grid-cols-2">
          <div className="text-left">
            <img src={renters} alt="" />
            <h3 className="text-purple-700 font-medium">
              {counterState && <CountUp start={5} end={50} duration={3} />}K+ renters</h3>
            <p className="font-normal text-xs">believe in our services</p>
          </div>
          <div className="">
            <img src={properties} alt="" />
            <h3 className="text-purple-700 font-medium text-left">
            {counterState && <CountUp start={1} end={15} duration={2.75} />}K+ properties
            </h3>
            <p className="font-normal text-xs text-left">
              and house ready for occupancy
            </p>
          </div>
        </div>
        </ScrollTrigger>
      </div>
      <div className="sm:hidden relative ">
        <img src={heroImg} className="h-full" alt="Hero image for est" />
        <div className="flex rounded-tl-xl w-[300px] flex-col gap-4 bg-blue-950 text-white px-4 py-5 right-0 absolute bottom-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Excellent</h3>
            <div className="flex items-center text-base font-light gap-2">
              <IoIosStar className="text-green-400" />
              <h4 className="">Trustpilot</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 text-yellow-800 text-lg">
            <FaStar className="" />
            <FaStar className="" />
            <FaStar className="" />
            <FaStar className="" />
            <FaStar className="" />
          </div>
          <p className="text-sm">From 3,264 reviews</p>
        </div>
        <div className="absolute w-[300px] flex flex-col rounded-xl tab:top-[20px] gap-2 bg-white left-[5px] top-0 py-6 px-7">
          <div className="flex flex-col gap-5 pb-4">
            <div className="flex items-center gap-4">
              <img src={heroTestimonial} className="rounded-full" alt="" />
              <div className="">
                <h3 className="font-bold text-lg">Manuel Villa</h3>
                <p className="text-slate-700 text-xs">Renter</p>
                <div className="flex items-center">
                  <p className="text-slate-700 text-xs">Moved with</p>
                  <div className="flex items-center">
                    <img src={logo} className="w-6" alt="" />
                    <h3 className="font-bold text-xs">EASTERY</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={quotation} className="self-start " alt="" />
              <p className="font-medium">I loved how smooth the move was, and finally got the house we wanted</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t pt-6 pb-3">
            <div className="">
              <h3 className="font-black text-xl">$1,500</h3>
              <p className="text-slate-700 text-sm">Saved up to</p>
            </div>
            <div className="">
              <h3 className="font-black text-xl">-24 hrs</h3>
              <p className="text-slate-700 text-sm">Process time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
