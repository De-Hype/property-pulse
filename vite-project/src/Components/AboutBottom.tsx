import { Link } from "react-router-dom";
import Meeting_Two from "../assets/Meeting_Two.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutBottom = () => {
  return (
    <div className="flex gap-9 flex-col tablet:flex-row items-center pt-10">

      <div className="pl-20 tablet:pr-0 pr-20 flex flex-col items-start gap-3">
        <h3 className="text-4xl font-extrabold">You're in good hands</h3>
        <p className=" text-base">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

        <Link
          to="/"
          className="flex items-center gap-1 bg-black py-2 px-5 rounded-tr-lg"
        >
          <span className="text-sm text-white font-semibold">Learn more</span>
          <FaLongArrowAltRight className="text-yellow-500" />
        </Link>
      </div>
      <img src={Meeting_Two} className="w-96 h-80  rounded-tl-3xl" alt="" />
    </div>
  );
};

export default AboutBottom;
