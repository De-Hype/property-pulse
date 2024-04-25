import Header from "../Components/Header";
import Hero_assets from "../assets/Hero_assets.jpg";

const About = () => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="">
        <img
          src={Hero_assets}
          alt=""
          className="h-screen brightness-50 w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <Header />
          <div className="mt-10">
            <h3 className="text-center font-bold text-3xl  text-white">
              About Property Pulse
            </h3>
            <p className="text-center mt-4 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              nostrum doloremque incidunt neque vel ducimus magni nulla nemo
              maxime adipisci dolore esse sed error, fuga eaque, perferendis
              sapiente? Enim, delectus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
