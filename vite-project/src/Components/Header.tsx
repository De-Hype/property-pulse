import { Link } from "react-router-dom";
import Logo from "../Layouts/Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-20">
        <Logo/>
        <nav className="flex items-center text-white gap-6 ">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Store</Link>
            <Button link={'/sign-in'} text={"Sign In"}/>
        </nav>
    </header>
  )
}

export default Header