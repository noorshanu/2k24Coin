function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#ffd51e] bg-main">
      <div className="container-wrapper lg:h-[100vh] flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="images/cloud1.png"
          alt=""
          className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[160px]  "
        />
        <img
          src="images/star.png"
          alt=""
          className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[120px] "
        />
     
        <img
          src="images/cloud2.png"
          alt=""
          className="x2 absolute w-auto h-[170px] hidden sm:block"
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x4 absolute w-auto h-[150px] hidden sm:block"
        />
        <img
          src="images/cloud1.png"
          alt=""
          className="x3 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[170px]  "
        />
     
        
        <div className="relative z-[9999] text-center text-white">
   
        <img
          src="images/star2.png"
          alt=""
          className="floating  absolute top-4 sm:-top-[56%] right-[10%] w-auto h-[120px] "
        />
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 font-onep">
          Happy New Year!
        </h1>
        <div className="mb-10">
          <button className="bg-[#ffeeb9] hover:bg-[#000] text-black hover:text-white font-bold py-2 px-4 mr-4 rounded">
            Buy Now
          </button>
          <button className="bg-[#ffeeb9] hover:bg-[#000] text-black hover:text-white font-bold py-2 px-4 rounded">
            Join Us
          </button>
        </div>
        </div>
    
      </div>
    </section>
  );
}

export default Hero;
