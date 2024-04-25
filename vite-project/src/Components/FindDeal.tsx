import virtual from "../assets/Eastery/virtual.svg";
import apply from "../assets/Eastery/apply.svg";
import deals from "../assets/Eastery/deals.svg";

const FindDeal = () => {
  return (
    <div className=" px-20 tab:px-5 gap-4 py-10 bg-blue-950 text-white w-full">
      <div className="w-full grid grid-cols-2 tab:flex tab:flex-col tab:gap-4">
        <h3 className="tab:text-center text-2xl font-semibold w-[250px] tab:w-full">
          We make it easy for <span className="text-purple-500">tenants</span>
          and <span className="text-purple-500">landlords</span>
        </h3>
        <p className="tab:text-center text-sm font-light">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
      <div className=" px-4 tab:px-0 tab:overflow-x-hidden overflow-x-scroll tab:ml-0 ml-[6.5rem] my-[3.8rem]">
        <div className="grid grid-cols-3 gap-6 tab:flex tab:flex-col tab:w-full  w-[150vw]  ">
          <div className="flex tab:flex-col  gap-3 px-5 py-3 bg-slate-400 rounded-lg">
            <img src={virtual} className="self-start" alt="" />
            <div className="flex flex-col gap-1 tab:gap-3">
              <h3 className="font-semibold text-lg">Virtual home tour</h3>
              <p className="text-sm">
                You can communicate directly with landlords and we provide you
                with virtual tour before you buy or rent the property.
              </p>
            </div>
          </div>
          <div className="flex tab:flex-col gap-3 px-5 py-3 bg-white text-black rounded-lg">
            <img src={deals} className="self-start" alt="" />
            <div className="flex flex-col gap-1 tab:gap-3">
              <h3 className="font-semibold text-lg">Find the best deal</h3>
              <p className="text-sm">
                Browse thousands of properties, save your favorites and set up
                search alerts so you don’t miss the best home deal!
              </p>
            </div>
          </div>
          <div className="flex tab:flex-col gap-3 px-5 py-3 bg-[#7065F0] rounded-lg">
            <img src={apply} className="self-start" alt="" />
            <div className="flex flex-col gap-1 tab:gap-3">
              <h3 className="font-semibold text-lg">Get ready to apply</h3>
              <p className="text-sm">
                Find your dream house? You just need to do a little to no effort
                and you can start move in to your new dream home!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center border-t pt-7 justify-center">
        <div className="grid grid-cols-3 gap-2 tab:grid-cols-1 tab:gap-5">
          <div className="flex flex-col items-center gap-1 pr-2">
            <h3 className="font-bold text-2xl text-center">7.4%</h3>
            <p className="text-center text-xs text-slate-200 font-extralight">Property return rate</p>
          </div>
          <div className="flex flex-col items-center gap-1 border-x tab:border-y tab:border-x-0 tab:py-3 px-2">
            <h3 className="font-bold text-2xl text-center">3,856</h3>
            <p className="text-center text-xs text-slate-200 font-extralight">Property In Sell & Rent</p>
          </div>
          <div className="flex flex-col items-center px-2 gap-1">
            <h3 className="font-bold text-2xl text-center">2,540</h3>
            <p className="text-center text-xs text-slate-200 font-extralight">Daily Completed Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDeal;
