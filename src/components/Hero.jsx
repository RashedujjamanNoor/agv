const Hero = () => {
  return (
    <div
      className="relative w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center"
      id="home"
    >
      {/* Video Wrapper (handles cropping) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
        <iframe
          className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
          src="https://www.youtube.com/embed/pVA0G01aDfk?autoplay=1&mute=1&loop=1&controls=0&start=4&end=107&playlist=pVA0G01aDfk&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0"
          title="YouTube background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="absolute bg-black/50 w-full h-full"></div>
      </div>

      {/* Overlay content */}
      {/* <div className=" absolute bottom-40 left-20 z-10 flex justify-center items-center bg-red-300 w-full">
        <div className=" text-white  flex justify-between items-end w-full max-w-[1440px]">
          <h1 className="md:text-5xl  xl:text-9xl ">
            Elevate Brand <br />
            Stunning <span className="text-red-500">Videos</span>
          </h1>
          <div>
            <p className="para text-lg max-w-[400px]">
              Montra is a full-service film production studio delivering bold
              visuals and powerful narratives. From commercials to creative
              films we bring your vision to life.
            </p>
          </div>
        </div>
      </div> */}
      <div className="absolute z-10 w-full h-full flex justify-center items-end text-white">
        <div className="max-w-[1440px] w-full pb-32 flex justify-between items-end">
          <h1 className="md:text-5xl  xl:text-9xl text-white">
            Elevate Brand <br />
            Stunning <span className="text-red-500">Videos</span>
          </h1>
          <div className="max-w-[380px]">
            <p className="para text-justify">
              Montra is a full-service film production studio delivering bold
              visuals and powerful narratives. From commercials to creative
              films we bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
