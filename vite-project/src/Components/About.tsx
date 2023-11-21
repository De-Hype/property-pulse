import { Link } from "react-router-dom";
import Meeting_One from "../assets/Meeting_One.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div className='flex gap-9 items-center pt-10'>
      <img src={Meeting_One} className="w-96 h-80  rounded-tr-3xl" alt="" />
      <div className="pr-20 flex flex-col items-start gap-3">
        <h3 className="text-4xl font-extrabold">About Us</h3>
        <p className=" text-base">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        
        <Link
          to='/'
          className="flex items-center gap-1 bg-black py-2 px-5 rounded-tr-lg"
        >
          <span className="text-sm text-white font-semibold">Learn more</span>
          <FaLongArrowAltRight className="text-yellow-500" />
        </Link>
      </div>
    </div>
  );
};

export default About;
