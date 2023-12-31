import Title from "components/Title";

const Grid = ({ direction = "left" }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full -z-20 pointer-events-none select-none ${
        direction === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`absolute top-0 ${
          direction === "right" ? "right-[-2px]" : "left-[-2px]"
        } w-full h-full opacity-50 z-10`}
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>

      <div
        className={`absolute z-20 w-full h-full top-0 left-0 from-transparent to-primary ${
          direction === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
};

function Roadmap() {
  return (
    <section className="relative z-10 bg-[#ffeeb9] py-4 ">
      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000000] font-bold mb-10 pt-8">
          About Us
        </Title>

     

        <div className="flex justify-evenly flex-col sm:flex-row">
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
         
            <img src="images/img1.jpg" alt="" className=" h-[350px] rounded-md border-4 border-[#f4382d]" />
       
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
