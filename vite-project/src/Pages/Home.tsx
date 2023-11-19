import About from "../Components/About"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LearnMore from "../Components/LearnMore"
import NextPlace from "../Components/NextPlace"
import Testimonial from "../Components/Testimonial"

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <NextPlace/>
      <About/>
      <LearnMore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home