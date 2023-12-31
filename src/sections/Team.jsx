import React from "react";
import Title from "components/Title";

function Team() {
  return (
    <section className="relative z-10 bg-[#ffeeb9] py-4  my-4">
      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000000] font-bold mb-10 pt-8">
          Meet Team
        </Title>

        <div className="flex justify-evenly flex-col sm:flex-row">
          <div className=" text-center">
            <img
              src="images/team/team1.JPG"
              alt=""
              className="h-[300px] border-4 border-[#f4382d] rounded-md"
            />
            <h3 className=" font-onep text-lg mt-2">Neko-San</h3>
            <p className=" text-base">(Deving Cat )</p>
          </div>

          <div className=" text-center">
            <img
              src="images/team/team2.JPG"
              alt=""
              className="h-[300px] border-4 border-[#f4382d] rounded-md"
            />
            <h3 className=" font-onep text-lg mt-2">ZoroinBoots   </h3>
            <p className=" text-base">(Marketoor )</p>
          </div>

          <div className="text-center">
            <img
              src="images/team/team3.JPG"
              alt=""
              className="h-[300px] border-4 border-[#f4382d] rounded-md"
            />
            <h3 className=" font-onep text-lg mt-2">NamiNeko
</h3>
            <p className=" text-base">(Catty-Cat )</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
