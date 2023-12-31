

const Button = ({ children, className, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`py-3 px-4 rounded-full bg-[rgba(255,255,255,.2)] text-sm transition-all duration-200 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </a>
  );
};

const SocialLink = ({ children }) => {
  return (
    <a
      href="/"
      className="w-[4em] h-[4em] rounded-full bg-white flex items-center justify-center text-[100%] text-black"
    >
      {children}
    </a>
  );
};

function JoinCommunity() {
  return (
    <section className="pt-24 relative z-10 overflow-hidden ">
      <div className="container-wrapper">
       

        <div className="flex  items-center justify-center ">
          <p className="text-center text-sm  font-bold py-2">
            All rights reserved | by 2k20Token  2024-25
          </p>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
