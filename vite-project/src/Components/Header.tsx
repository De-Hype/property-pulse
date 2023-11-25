import { Link } from "react-router-dom";
import Logo from "../Layouts/Logo";
import Button from "./Button";
import Testimony_One from "../assets/Testimony_One.jpg";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  // <nav className="flex items-center text-white gap-6 ">
  //       <Link to="/">Home</Link>
  //       <Link to="/">About</Link>
  //       <Link to="/">Store</Link>
  //       <Button link={"/sign-in"} text={"Sign In"} />
  //     </nav>
  return (
    <header className="flex items-center justify-between py-5 px-20">
      <Link to="/">
        <Logo />
      </Link>
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
          className="h-16 w-16 relative cursor-pointer bg-white rounded-full"
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
