import { Link, useNavigate } from "react-router-dom";
import Logo from "../Layouts/Logo";
//import Button from "./Button";
import Testimony_One from "../assets/Testimony_One.jpg";
import { AiOutlineDown, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

interface HeaderProps{
  dark:boolean;
}

const Header = ({dark}:HeaderProps) => {
 // const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  // <nav className="flex items-center text-white gap-6 ">
  //       <Link to="/">Home</Link>
  //       <Link to="/">About</Link>
  //       <Link to="/">Store</Link>
  //       <Button link={"/sign-in"} text={"Sign In"} />
  //     </nav>
  const handleSearch=(ev:React.FormEvent<HTMLFormElement>):void=>{
    ev.preventDefault();
    console.log(searchTerm)
    navigate('/search')
  }

 
  return (
    <header className="flex items-center justify-between py-5 px-10 tablet:px-20">
      <Link to="/">
        <Logo />
      </Link>

        <form onSubmit={(ev)=>handleSearch(ev)} className={` tablet:flex hidden ${dark} ? "text-white" : 'text-black' flex-1 px-5 `} >
          <input
            type="text"
            placeholder="Search listings"
            className="px-3 w-2/3 h-full py-2 bg-transparent border outline-none "
            name=""
            id=""
            onChange={(ev)=>setSearchTerm(ev.target.value)}
          />
          
          <button className="cursor-pointer px-4  border bg-yellow-600 " type="submit">Search</button>
        </form>


      <div className=" items-center gap-6 tablet:flex hidden">
        
        <div  className={`${dark} ? "text-white" : 'text-black' flex items-center gap-3 font-semibold `}>
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
      <AiOutlineMenu className="tablet:hidden block text-xl pointer"/>

    </header>
  );
};

export default Header;
