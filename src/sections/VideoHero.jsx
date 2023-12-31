import React from 'react'

function VideoHero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="images/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white">
      {/* <img
          src="images/star.png"
          alt=""
          className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[120px] "
        /> */}
        <img
          src="images/star2.png"
          alt=""
          className="floating  absolute top-4 sm:-top-[56%] right-[10%] w-auto h-[120px] "
        />
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6">
          Happy New Year!
        </h1>
        <div className="mb-10">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mr-4 rounded">
            Buy Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Join Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoHero