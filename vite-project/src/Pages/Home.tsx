//@ts-nocheck
import Header from "../Components/Header"
import FindHome from "../Components/FindHome"
import MarketPlace from "../Components/MarketPlace"
import Footer from "../Components/Footer"
import Newsletter from "../Components/Newsletter"
import FindDeal from "../Components/FindDeal";
import Hero from "../Components/Hero";
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    AOS.init({duration:3000})
  }, [])
  
  return (
    <div className="overflow-hidden ">
     <Header />
     <Hero />
     <FindHome />
     <MarketPlace />
     <FindDeal />
     <Newsletter />
     <Footer />
    </div>
  )
}

export default Home