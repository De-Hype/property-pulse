import Header from "./Header";
import Hero_assets from "../assets/Hero_assets.jpg";
import AllListing from "../Layouts/AllListing";
//bg-hero-image
const Hero = () => {
  return (
    <aside className="overflow-x-hidden">
      <img src={Hero_assets} alt="" className="h-screen brightness-50 w-full" />
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <Header />
        <div className=" mt-10 items-center px-10 tablet:px-20">
          <div className=" w-72 flex flex-col gap-6 text-white">
            <h3 className="text-5xl font-bold ">Beautiful homes made for you</h3>
            <p className="tablet:text-lg">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>
          <AllListing/>
        </div>
      </div>
    </aside>
  );
};

export default Hero;
