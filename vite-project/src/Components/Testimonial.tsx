import Testimony_One from "../assets/Testimony_One.jpg";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const previous = (e: React.DOMAttributes<HTMLButtonElement>) => {
   console.log(e)
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = (e: React.DOMAttributes<HTMLButtonElement>) => {
    console.log(e)
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className="tablet:mx-[250px] px-5 tablet:px-0">
      <section className="flex py-14 justify-center items-center ">
        <div className="">
          <div className="pb-3">
            <h2 className=" text-base tablet:text-xl  text-slate-900 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              molestiae temporibus distinctio repellat modi alias molestias,
              veniam atque harum excepturi rem cumque, iure illum deserunt natus
              magnam autem suscipit unde?
            </h2>
          </div>
          <div className="flex justify-between items-center pt-6">
            <div className="flex gap-4 items-center">
              <div className="">
                <img
                  src={Testimony_One}
                  className="tablet:h-24 h-16 w-16 tablet:w-24 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="text-slate-900 font-extrabold text-sm tablet:text-lg ">
                  David Hype
                </h2>
                <span className="text-slate-900 font-semibold text-xs">
                  Project manager
                </span>
              </div>
            </div>
            <div className="flex gap-4 ">
              <button
                onClick={() => previous}
                type="button"
                className=" rounded-full border tablet:text-3xl text-xl  py-3 px-3 hover:bg-yellow-700 hover:transition hover:text-white"
              >
                <AiOutlineArrowLeft />
              </button>
              <button
                onClick={() => next}
                type="button"
                className=" rounded-full border tablet:text-3xl text-xl py-3 px-3 hover:bg-yellow-700 hover:transition hover:text-white"
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
