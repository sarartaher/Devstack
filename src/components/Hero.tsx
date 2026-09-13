import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto py-5 flex justify-between items-center max-sm:flex-col ">
        <div className="hero-left lg:flex flex-col gap-8 max-sm:container max-sm:flex-col max-sm:justify-items-center max-sm:text-center">
          <h1 className="text-6xl font-semibold max-sm:text-5xl">
            Build Your Ideal <br />{" "}
            <span className="brand-gradient-text">Development Stack </span>{" "}
          </h1>
          <p className="text-[#475569] text-xl">
            Explore frontend, backend, database, and tooling options, <br />{" "}
            compare them side by side, and put together the stack that fits your{" "}
            <br /> next project.
          </p>
          <div className="hero-button flex gap-4.5 font-semibold max-sm: py-4 ">
            <button className="text-white brand-gradient px-3.5 py-1.5 rounded-md ">
              Explore Technologies
            </button>
            <button className=" outline-gray-300 outline-[1px] px-7.5 py-1.5 rounded-md">
              Learn more
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="divider w-[30px] h-1 my-10 mx-auto bg-pink-400"></div>
    </>
  );
};

export default Hero;
