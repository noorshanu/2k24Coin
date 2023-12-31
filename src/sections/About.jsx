import Title from "components/Title";

function About() {
  return (
    <section className="relative z-10  py-4 ">
    <div className="container-wrapper mb-14">
      <Title className="text-center text-[#000000] font-bold mb-10 pt-8">
        About Us
      </Title>

   

      <div className="flex justify-evenly flex-col sm:flex-row">
      
       
          <img src="images/cat.JPG" alt="" className=" h-[350px] rounded-md border-4 border-[#f4382d]" />

          <div>
            <h2 className=" font-onep text-2xl mb-3 " >Neko 2024 is your New Year Cat</h2>
          <p className=" max-w-xl mb-2 text-lg">
          It's a concept that we invented as a team to bring prosperity and joy to our holders.
Starting the date of launch, our team is counting on tackling diverse marketing aspects to make Neko a sweet loving brand in web3
          </p>
          <p className=" max-w-xl text-lg">
          We are forever be grateful for your support to us, and a Happy New Year !❤!
          </p>
          </div>
     
      </div>
    </div>
  </section>
  );
}

export default About;
