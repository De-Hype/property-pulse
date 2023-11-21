import FooterBottom from "../Layouts/FooterBottom"
import FooterTop from "../Layouts/FooterTop"

const Footer = () => {
  return (
    <div className="px-20 py-12 bg-orange-950 flex flex-col gap-4">
      <FooterTop/>
      <hr />
      <FooterBottom/>
    </div>
  )
}

export default Footer