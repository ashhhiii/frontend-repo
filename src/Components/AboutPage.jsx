import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <header className='font-["Neue_Montreal"] text-lg md:text-2xl lg:text-3xl leading-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </header>
      <section className="w-full flex flex-col md:flex-row gap-5 mt-20 border-t-[1px] border-[#889d32]">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Our approach</h1>
          <button
            className="flex gap-3 items-center px-4 py-4 bg-zinc-800 rounded-full mt-10 text-white hover:bg-zinc-700 active:scale-95 transition-transform"
            aria-label="Read more about our approach"
          >
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="md:w-1/3 h-[70vh] rounded-3xl bg-[#a8be58]">
          {/* Placeholder for future content */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

