import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
  return (
      <div className="h-screen flex justify-center items-center">
        <BeatLoader size={15} color="#4f46e5"/>
      </div>
  );
};

export default Spinner;