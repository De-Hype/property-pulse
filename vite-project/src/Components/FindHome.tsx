import { Link } from "react-router-dom";
import HeroHome from "../assets/Eastery/HeroHome.svg";
import Insurance from "../assets/Eastery/Insurance.svg";
import commisionIcon from "../assets/Eastery/commisionIcon.svg";
import overAllIcon from "../assets/Eastery/overAllIcon.svg";
import priceIcon from "../assets/Eastery/priceIcon.svg";

const FindHome = () => {
  return (
    <div className="flex tab:flex-col px-20 sm:px-6 gap-4 py-10">
      <div className="bg-purple-200 rounded-xl py-4 px-5">
        <div className="flex flex-col gap-4 sm:pb-7">
          <h2 className=" tab:text-center text-purple-950 text-xl font-medium">The new way to find your new home</h2>
          <p className="tab:text-center">
            Find your dream place to live in with more than 10k+ properties
            listed
          </p>
          <Link className="w-full bg-blue-950 flex justify-center items-center rounded-xl" to="/">
            <button
              className=" px-4 py-2 rounded-md outline-none   text-white tab:"
              type="button"
            >
              Browse Properties
            </button>
          </Link>
        </div>
        <img src={HeroHome} className="w-full h-[250px]" alt="" />
      </div>
      <div className="grid grid-rows-2 sm:gap-4">
        <div className="Row-1 grid grid-cols-2 sm:grid-cols-1 sm:gap-4">
            <div className="Benefit-1 ">
                <img src={Insurance} className="pb-5" alt="" />
                <div className="">
                    <h3 className="font-bold text-lg pb-5">Property Insurance</h3>
                    <p className="">We offer our customer property protection of liability coverage and insurance for their better life.</p>
                </div>
            </div>
            <div className="Benefit-1">
                <img src={priceIcon} className="pb-5" alt="" />
                <div className="">
                    <h3 className="font-bold text-lg pb-5">Best Price</h3>
                    <p className="">We offer our customer property protection of liability coverage and insurance for their better life.</p>
                </div>
            </div>
        </div>
        <div className="Row-1 pt-5 sm:pt-0 grid grid-cols-2 sm:grid-cols-1 sm:gap-4">
            <div className="Benefit-1">
                <img className="pb-5" src={commisionIcon} alt="" />
                <div className="">
                    <h3 className="font-bold text-lg pb-5">Lowest Commission</h3>
                    <p className="">We offer our customer property protection of liability coverage and insurance for their better life.</p>
                </div>
            </div>
            <div className="Benefit-1 sm:pt-3">
                <img className="pb-5" src={overAllIcon} alt="" />
                <div className="">
                    <h3 className="font-bold text-lg pb-5">Overall Control</h3>
                    <p className="">We offer our customer property protection of liability coverage and insurance for their better life.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FindHome;
