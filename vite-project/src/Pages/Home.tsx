import About from "../Components/About"
import AboutBottom from "../Components/AboutBottom"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LearnMore from "../Components/LearnMore"
import NextPlace from "../Components/NextPlace"
import Testimonial from "../Components/Testimonial"
//Remember to change your oauth button type to button, and also set an onclick
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <About/>
      <NextPlace/>
      <AboutBottom/>
      <LearnMore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home