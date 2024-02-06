import { Link } from "react-router-dom"
import FooterBottom from "../Layouts/FooterBottom"
import FooterTop from "../Layouts/FooterTop"

const Footer = () => {
  return (
    <div className="px-5 tablet:px-20 py-12 bg-orange-950 flex flex-col gap-4">
      <FooterTop/>
      <hr />
      <FooterBottom/>
      <h3 className="text-center text-white mt-5">Built by <Link className="text-lg font-bold hover:text-slate-200" to='/'>David Hype</Link></h3>
    </div>
  )
}

export default Footer