import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
    <div className="max-w-screen-lg mx-auto border-none px-4">
      <section
        className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
      >
        <div>
          <p className="leading-8 tracking-wide">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div>
          <p className="leading-8 tracking-wide">Privacy Policy</p>
        </div>
      </section>
    </div>
</footer>
  );
};

export default Footer;