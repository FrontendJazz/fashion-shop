import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-20">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 text-white">
          <p className="uppercase tracking-loose">Find your thing</p>
          <h1 className="font-bold text-3xl my-4 uppercase">GULSINA DRESSES</h1>
          <p className="leading-normal mb-4">Sway your way through life with AJIO’s collection of fabulous dresses. Be it for your everyday wear, your clubbing nights or for your corporate chic looks, AJIO has just the right selection of dresses for women to make the right statement. Browse through and get bewitched! +</p>
          <button
            className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;