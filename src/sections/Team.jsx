import React from 'react'
import Title from "components/Title";

function Team() {
  return (
    <section className="relative z-10 bg-[#ffeeb9] py-4  my-4">
    <div className="container-wrapper mb-14">
      <Title className="text-center text-[#000000] font-bold mb-10 pt-8">
        Meet Team
      </Title>

   

      <div className="flex justify-evenly flex-col sm:flex-row">
       <img src="images/team/team1.webp" alt="" className='h-[300px]' />
       <img src="images/team/team2.webp" alt=""  className='h-[300px]' />
       <img src="images/team/team3.webp" alt=""  className='h-[300px]' />
       <img src="images/team/team4.webp" alt="" className='h-[300px]'  />
     
      </div>
    </div>
  </section>
  )
}

export default Team