import Button from "./Button";

const LearnMore = () => {
  return (
    <div className="bg-orange-950 flex justify-center items-center py-24 gap-3 flex-col">
      {/* <div className="w-2/3 "> */}
        <h3 className="text-white text-3xl font-extrabold">What We Do</h3>
        <p className=" text-sm text-white text-center w-2/3">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        <Button text={"Learn More"} link={"/"} />
      {/* </div> */}
    </div>
  );
};

export default LearnMore;
