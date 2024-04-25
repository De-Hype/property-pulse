import { Link } from "react-router-dom";
import logo from "../assets/Eastery/logo.svg";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import {IoEarth} from "react-icons/io5"
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="px-20 tab:px-5 gap-4 py-10">
      <div className="flex gap-5 tab:flex-col sm:items-center py-6">
        <div className="mb-0 tab:mb-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h3 className="font-bold text-lg">EASTERY</h3>
          </Link>
        </div>
        <div className=" ml-8 tab:ml-0 w-full">
          <div className="grid grid-cols-3 gap-4 tab:grid-cols-1 sm:flex sm:flex-col ">
            <div className="tab:flex tab:text-center justify-between sm:flex-col sm:gap-5">
              <div className=" flex flex-col gap-3">
                <h3 className="font-bold">SELL A HOME</h3>
                <div className="flex flex-col text-sm gap-2">
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Request an offer
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Pricing
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Reviews
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Stories
                    </Link>
                  </p>
                </div>
              </div>
              <div className="pt-10 tab:pt-0 flex flex-col gap-3">
                <h3 className="font-bold">BUY A HOME</h3>
                <div className="flex flex-col text-sm gap-2">
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Buy
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Finance
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="tab:flex  tab:text-center justify-between sm:flex-col sm:gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">BUY, RENT AND SELL</h3>
                <div className="flex flex-col text-sm gap-2">
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Buy and sell properties
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Rent home
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Builder trade-up
                    </Link>
                  </p>
                </div>
              </div>
              <div className="pt-10 tab:pt-0 flex flex-col gap-3">
                <h3 className="font-bold">TERMS & PRIVACY</h3>
                <div className="flex flex-col text-sm gap-2">
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Trust & Safety
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Terms of Service
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="tab:flex tab:text-center  justify-between sm:flex-col sm:gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">ABOUT</h3>
                <div className="flex flex-col text-sm gap-2">
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Company
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      How it works
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Contact
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Investors
                    </Link>
                  </p>
                </div>
              </div>
              <div className="pt-10 tab:pt-0 flex flex-col gap-3">
                <h3 className="font-bold">RESOURCES</h3>
                <div className="flex flex-col text-sm gap-2">
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Blog
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Guides
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      FAQ
                    </Link>
                  </p>
                  <p className="sm:text-center">
                    <Link to="/" className="">
                      Help Center
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center text-slate-700 justify-between sm:flex-col tab:gap-3 border-t py-6">
        <div className="">
          <p className="tab:text-center"><span>&copy;</span> {date} Estatery. All rights reserved</p>
        </div>
        <div className="flex items-center tab:justify-around sm:w-full tab:pt-4 gap-3">
        <Link  to="/">
          <AiOutlineGithub className="text-2xl" />
        </Link>
        <Link  to="/">
          <AiOutlineLinkedin className="text-2xl" />
        </Link>
        <Link  to="/">
          <IoEarth className="text-2xl" />
        </Link>
        </div>
      </div>
      <h3 className="text-center">
        Built by  
        <Link className="font-bold pl-1" to="https://hire-david-hype.vercel.app">
          David Hype
        </Link>
      </h3>
    </div>
  );
};

export default Footer;
