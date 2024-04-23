import Header from "../Components/Header"
import Hero from "../Components/Hero"
import FindHome from "../Components/FindHome"
import MarketPlace from "../Components/MarketPlace"
import Footer from "../Components/Footer"
import FindDeal from "../Components/FindDeal"
import Newsletter from "../Components/Newsletter"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
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