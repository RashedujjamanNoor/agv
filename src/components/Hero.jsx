const Hero = () => {
  return (
    <div
      className="relative 2xl:w-[100vw] 2xl:h-[100vh] overflow-hidden flex  justify-center items-center"
      id="home"
    >
      {/* Video Wrapper (handles cropping) */}
      <div className="relative w-screen h-[35vh] md:h-[50vh] lg:h-[50vh] xl:h-[80vh] overflow-hidden 2xl:h-[100vh]">
        <iframe
          className="absolute top-0 left-0 w-full h-full scale-150 object-cover pointer-events-none"
          src="https://www.youtube.com/embed/pVA0G01aDfk?autoplay=1&mute=1&loop=1&controls=0&start=4&end=107&playlist=pVA0G01aDfk&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0"
          title="YouTube background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* <div className="w-[100vw] h-[40vh] hidden 2xl:hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none object-fill"
          src="https://www.youtube.com/embed/pVA0G01aDfk?autoplay=1&mute=1&loop=1&controls=0&start=4&end=107&playlist=pVA0G01aDfk&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0"
          title="YouTube background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="absolute bg-black/50 w-full h-full"></div>
      </div>
      <div className="hidden  2xl:absolute top-0 left-0 w-full h-full overflow-hidden ">
        <iframe
          className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
          src="https://www.youtube.com/embed/pVA0G01aDfk?autoplay=1&mute=1&loop=1&controls=0&start=4&end=107&playlist=pVA0G01aDfk&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0"
          title="YouTube background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="absolute bg-black/50 w-full h-full"></div>
      </div> */}

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
      <div className="absolute z-10 w-full h-full flex justify-center items-end text-white  px-4">
        <div className="max-w-[1440px] md:pb-20 xl:pb-32 w-full flex flex-col md:flex-row md:justify-between md:items-end justify-end items-start">
          <h1 className="text-3xl md:text-5xl lg:text-6xl  xl:text-8xl 2xl:text-9xl text-white">
            Elevate Brand <br />
            Stunning <span className="text-red-500">Videos</span>
          </h1>
          <div className="max-w-[380px] mt-1">
            <p className="para text-justify text-[0.8rem] sm:text-base md:text-lg lg:text-xl text-gray-300">
              At VidlyPro, we handle your video editing so you can focus on
              creating, growing, and connecting with your audience. Get
              viral-style edits, trendy cuts, and platform-ready videos — all
              done for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
