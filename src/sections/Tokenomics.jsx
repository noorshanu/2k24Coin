import Title from "components/Title";

function Tokenomics() {
  return (
    <section className="container-wrapper my-4 bg-[#deedfe] rounded-2xl py-10 sm:py-14 px-4 sm:px-10 relative z-10" id="token">
      <Title className="text-black mb-10 text-center" data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">Tokenomics</Title>
     <div className=" flex flex-col sm:flex-row items-center justify-center w-full gap-8">
     <div className="bg-[#c6f2ff] my-5 py-5 px-3 rounded-md w-full white-shadow text-center font-semibold">
            <p className=" uppercase">Buy Tax = 2.024%</p>
            </div> 

            <div className="bg-[#ffcbdf] w-full my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Sale tax = 2.024%</p>

            </div>
     </div>

     <div className=" flex flex-col sm:flex-row items-center justify-center w-full gap-8">
     <div className="bg-[#dbffc6] my-5 py-5 px-3 rounded-md w-full white-shadow text-center font-semibold">
            <p className=" uppercase">Supply = 2 024 000 000 Neko</p>
            </div> 

            <div className="bg-[#e9cdff] w-full my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Team = 20%</p>

            </div>
     </div>

     <div className=" flex flex-col sm:flex-row items-center justify-center w-full gap-8">
     <div className="bg-[#e9cdff] my-5 py-5 px-3 rounded-md w-full white-shadow text-center font-semibold">
            <p className=" uppercase">Liquidity  = Locked</p>
            </div> 

            <div className="bg-[#ffcbdf] w-full my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Contract = renounced</p>

            </div>
     </div>

   
    </section>
  );
}

export default Tokenomics;
