import { Link, useNavigate } from "react-router-dom";
import Logo from "../Layouts/Logo";
import Testimony_One from "../assets/Testimony_One.jpg";
import {
  AiOutlineCloseCircle,
  // AiOutlineDown,
  // AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { useState } from "react";
import { Server } from "../utils/Server";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "./Button";

const Header = () => {
  // const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
  };
  const dark = true;
  const user = Cookies.get("pulse_user");
  const navigate = useNavigate();

  const handleSearch = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      const result: any = await axios.post(`${Server}/`);
      if (result.data.status == "ok" && result.data.success == true) {
        // setFirebase_url(result.data.photo_url);
        console.log(searchTerm);
        navigate("/search");
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className=" flex items-center justify-between py-5 px-10 tablet:px-20">
      <Link to="/">
        <Logo />
      </Link>

      <form
        onSubmit={(ev) => handleSearch(ev)}
        className={` tablet:flex hidden ${dark} ? " text-white" : 'text-black' flex-1 px-5 `}
      >
        <input
          type="text"
          placeholder="Search listings"
          className="px-3 w-2/3 h-full py-2 bg-transparent border outline-none "
          name=""
          id=""
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />

        <button
          className="cursor-pointer px-4  border bg-yellow-600 "
          type="submit"
        >
          Search
        </button>
      </form>
      {user ? (
        <div className=" items-center gap-6 tablet:flex hidden">
          <div
            className={`${dark} ? "text-white" : 'text-black' flex items-center gap-3 font-semibold `}
          >
            <Link className="hover:text-yellow-100" to="/create">
              Create listings
            </Link>
            <Link className="hover:text-yellow-100" to="/my-listings">
              My listings
            </Link>
          </div>
          <Link
            to="/profile"
            className="h-14 w-14 relative cursor-pointer bg-white rounded-full"
          >
            <img
              src={Testimony_One}
              alt=""
              className="h-full w-full object-contain rounded-full"
            />
          </Link>
        </div>
      ) : (
        <nav className=" items-center tablet:flex hidden text-white gap-6 ">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
          <Button link={"/sign-in"} text={"Sign In"} />
        </nav>
      )}
      <AiOutlineMenu
        onClick={handleMobileMenu}
        className="tablet:hidden block text-xl pointer"
      />
      {mobileMenuShow && (
        <div className="bg-black absolute top-0 left-0 right-0 bottom-0">
          <div className="flex items-center justify-between px-5 mt-5">
            <Link to="/">
              <Logo />
            </Link>
            <AiOutlineCloseCircle
              onClick={handleMobileMenu}
              className="text-white tablet:hidden block text-xl pointer"
            />
          </div>
          {user ? (
            <div className="flex flex-col gap-7 mt-5">
              <p className="bg-red- text-white text-center">
                <Link to="/">Home</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/">About</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/">Store</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/create">Create Listings</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/my-listings">My Listings</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/profile">My Profile</Link>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-7 mt-5">
              <p className="bg-red- text-white text-center">
                <Link to="/">Home</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/">About</Link>
              </p>
              <p className="bg-red- text-white text-center">
                <Link to="/">Store</Link>
              </p>
              <div className="flex items-center justify-center">
                <Button link={"/sign-in"} text={"Sign In"} />
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
