import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import Logo from "./Logo"

const FooterBottom = () => {
  return (
    <div className="grid grid-cols-4 mt-5">
        <div className="">
            <Logo/>
            <div className="flex gap-3 mt-4">
                <Link to='/' className="text-2xl text-white"><AiOutlineGithub/></Link>
                <Link to='/' className="text-2xl text-white"><AiOutlineLinkedin/></Link>
                <Link to='/' className="text-2xl text-white"><AiOutlineWhatsApp/></Link>
            </div>
        </div>
        <div className="text-white">
            <h3 className="font-bold">Products</h3>
            <ul className="">
                <li className="mt-2 text-base font-light "><Link className="hover:text-red-300" to='.'>Home</Link></li>
                <li className="mt-2 text-base font-light "><Link className="hover:text-red-300" to='.'>About</Link></li>
                <li className="mt-2 text-base font-light"><Link className="hover:text-red-300" to='.'>Services</Link></li>
                <li className="mt-2 text-base font-light"><Link className="hover:text-red-300" to='.'>Careers</Link></li>
            </ul>
        </div>

        <div className="text-white">
            <h3 className="font-bold">Products</h3>
            <ul className="">
                <li className="mt-2 text-base font-light "><Link className="hover:text-red-300" to='.'>Home</Link></li>
                <li className="mt-2 text-base font-light "><Link className="hover:text-red-300" to='.'>About</Link></li>
                <li className="mt-2 text-base font-light"><Link className="hover:text-red-300" to='.'>Services</Link></li>
                <li className="mt-2 text-base font-light"><Link className="hover:text-red-300" to='.'>Careers</Link></li>
            </ul>
        </div>

        <div className="text-white">
            <h3 className="font-bold">Products</h3>
            <ul className="">
                <li className="mt-2 text-base font-light "><Link className="hover:text-red-300" to='.'>Home</Link></li>
                <li className="mt-2 text-base font-light "><Link className="hover:text-red-300" to='.'>About</Link></li>
                <li className="mt-2 text-base font-light"><Link className="hover:text-red-300" to='.'>Services</Link></li>
                <li className="mt-2 text-base font-light"><Link className="hover:text-red-300" to='.'>Careers</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default FooterBottom