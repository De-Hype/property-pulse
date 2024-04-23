import virtual from "../assets/Eastery/virtual.svg";
import apply from "../assets/Eastery/apply.svg";
import deals from "../assets/Eastery/deals.svg";

const FindDeal = () => {
  return (
    <div className=" px-20 tab:px-5 gap-4 py-10 bg-blue-950 text-white">
      <div className="">
        <div className="w-full grid grid-cols-2 tab:flex tab:flex-col tab:gap-4">
          <h3 className="tab:text-center text-2xl font-semibold w-[250px] tab:w-full">
            We make it easy for <span className="text-purple-500">tenants</span>{" "}
            and <span className="text-purple-500">landlords</span>
          </h3>
          <p className="tab:text-center text-sm font-light">
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you’ll
            save a bunch of money and time with our services.
          </p>
        </div>
        <div className="grid grid-cols-3 tab:block mt-5">
          <div className="flex tab:flex-col px-3 py-2">
            <img src={virtual} className="self-start" alt="" />
            <div className="">
              <h3>Virtual home tour</h3>
              <p className="">
                You can communicate directly with landlords and we provide you
                with virtual tour before you buy or rent the property.
              </p>
            </div>
          </div>
          <div className="flex tab:flex-col px-3 py-2">
            <img src={deals} className="self-start" alt="" />
            <div className="">
              <h3>Find the best deal</h3>
              <p className="">
                Browse thousands of properties, save your favorites and set up
                search alerts so you don’t miss the best home deal!
              </p>
            </div>
          </div>
          <div className="flex tab:flex-col px-3 py-2">
            <img src={apply} className="self-start" alt="" />
            <div className="">
              <h3>Get ready to apply</h3>
              <p className="">
                Find your dream house? You just need to do a little to no effort
                and you can start move in to your new dream home!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDeal;
