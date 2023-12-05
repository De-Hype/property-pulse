import { Link, useNavigate } from "react-router-dom";
import Logo from "../Layouts/Logo";
import Button from "./Button";
import Testimony_One from "../assets/Testimony_One.jpg";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Header = ({dark}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate()
  // <nav className="flex items-center text-white gap-6 ">
  //       <Link to="/">Home</Link>
  //       <Link to="/">About</Link>
  //       <Link to="/">Store</Link>
  //       <Button link={"/sign-in"} text={"Sign In"} />
  //     </nav>
  const handleSearch=(ev:React.FormEvent<HTMLFormElement>):void=>{
    ev.preventDefault();
    navigate('/search')
  }

 
  return (
    <header className="flex items-center justify-between py-5 px-20">
      <Link to="/">
        <Logo />
      </Link>

        <form onSubmit={(ev)=>handleSearch(ev)} className="flex-1 text-white flex px-5 ">
          <input
            type="text"
            placeholder="Search listings"
            className="px-3 w-2/3 h-full py-2 bg-transparent border outline-none "
            name=""
            id=""
          />
          
          <button className="cursor-pointer px-4  border bg-yellow-600 " type="submit">Search</button>
        </form>


      <div className="flex items-center gap-6">
        
        <div className="flex items-center gap-3 font-semibold text-white">
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
    </header>
  );
};

export default Header;
