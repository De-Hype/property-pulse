//@ts-nocheck
import Header from "../Components/Header";
import FindHome from "../Components/FindHome";
import MarketPlace from "../Components/MarketPlace";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import FindDeal from "../Components/FindDeal";
import Hero from "../Components/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <section className="" data-aos="fade-up">
        <Header />
        <Hero />
      </section>
      <section data-aos="fade-up">
        <FindHome />
      </section>
      <section data-aos="fade-up">
        <MarketPlace />
      </section>
      <section data-aos="fade-up">
      <FindDeal />
      </section>
      <section data-aos="fade-up">
      <Newsletter />
      </section>
      <section data-aos="fade-up">
      <Footer />
      </section>
    </div>
  );
};

export default Home;
