function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#ffd51e] bg-main">
      <div className="container-wrapper lg:h-[100vh] flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
      

        <div className="relative z-[9999] text-center text-white mt-[15%]">
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x50cefb561df9030acac46c6c23840633c10be7e8" target="_blank">
            <img
              src="images/star.png"
              alt=""
              className="floating  absolute -top-[40%] sm:-top-[58%] left-3 sm:left-[10%] w-auto h-14 sm:h-[120px] "
            />
          </a>

          <a href="https://twitter.com/NekoCoin2k24" target="_blank">
            <img
              src="images/star3.png"
              alt=""
              className="floating  absolute -top-[40%] sm:-top-[58%] left-[35%] sm:left-[45%] w-auto h-14 sm:h-[120px] "
            />
          </a>

          <a href="https://t.me/nekocoin2k24" target="_blank">
            <img
              src="images/star2.png"
              alt=""
              className="floating  absolute -top-[40%] sm:-top-[56%] right-[10%] w-auto h-14 sm:h-[120px] "
            />
          </a>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 font-onep">
            Happy New Year!
          </h1>
          <div className="mb-10">
            <a   href="https://www.dextools.io/app/en/ether/pair-explorer/0x50cefb561df9030acac46c6c23840633c10be7e8"  target="_target" className="bg-[#ffeeb9] hover:bg-[#000] text-black hover:text-white font-bold py-2 px-4 mr-4 rounded">
              Buy Now
            </a>
            <a href="https://t.me/nekocoin2k24"  target="_target" className="bg-[#ffeeb9] hover:bg-[#000] text-black hover:text-white font-bold py-2 px-4 rounded">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
