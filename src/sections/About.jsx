import Title from "components/Title";

function About() {
  return (
    <section className="relative z-10  py-4 ">
    <div className="container-wrapper mb-14">
      <Title className="text-center text-[#000000] font-bold mb-10 pt-8">
        About Us
      </Title>

   

      <div className="flex justify-evenly flex-col sm:flex-row">
      
       
          <img src="images/img2.jpg" alt="" className=" h-[350px] rounded-md border-4 border-[#f4382d]" />

          <div>
          <p className=" max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur magnam repellat id molestiae blanditiis, quas
            provident, possimus voluptates vitae, velit dolores eius
            cupiditate atque itaque tempore quos ratione in fuga!
          </p>
          <p className=" max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur magnam repellat id molestiae blanditiis, quas
            provident, possimus voluptates vitae, velit dolores eius
            cupiditate atque itaque tempore quos ratione in fuga!
          </p>
          </div>
     
      </div>
    </div>
  </section>
  );
}

export default About;
