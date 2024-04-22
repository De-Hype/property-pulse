import { Link } from "react-router-dom";
import logo from "../assets/Eastery/logo.svg";
import { 
  //AiOutlineClose,
   AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <div className="bg-purple-50">
      <div className="flex items-center justify-between px-6 py-3">
        <nav className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h3 className="font-bold text-lg">EASTERY</h3>
          </Link>
          <nav className=" flex items-center gap-3 font-semibold sm:hidden">
            <Link to="/">Rent</Link>
            <Link to="/">Buy</Link>
            <Link to="/">Sell</Link>
          </nav>
        </nav>
        <nav className="flex items-center gap-4 font-semibold sm:hidden">
          <Link className="" to="/">
            <button className="px-4 py-2 text-slate-600 rounded-md outline-none border border-purple-700" type="button">
              Login
            </button>
          </Link>
          <Link className="" to="/">
            <button className="bg-purple-700 px-4 py-2 rounded-md outline-none border border-purple-700 text-white" type="button">
              Sign up
            </button>
          </Link>
        </nav>
        <AiOutlineMenu className=" hidden sm:block font-black text-xl" />
      </div>
    </div>
  );
};

export default Header;
