import Title from "components/Title";
import Marquee from "react-fast-marquee";

function Roadmap() {
  return (
    <section className="relative z-10 bg-[#ffeeb9] py-4 ">
      <div className=" mb-14">
        <Title className="text-center text-[#000000] font-bold mb-10 pt-8">
        Our Neko
In stores soon
        </Title>

        <Marquee>
          <img
            src="images/img1.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
          <img
            src="images/img2.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
          <img
            src="images/img3.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
          <img
            src="images/img5.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />

<img
            src="images/img1.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
          <img
            src="images/img2.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
          <img
            src="images/img3.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
          <img
            src="images/img5.jpg"
            alt=""
            className=" h-[350px] rounded-md border-4 border-[#f4382d] ml-4"
          />
        </Marquee>
      </div>
    </section>
  );
}

export default Roadmap;
