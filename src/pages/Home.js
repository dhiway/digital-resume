import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const Navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full h-screen relative">
      <h6 className="mt-10 text-design-grey text-2xl cursor-default">Search for your DreamJob here</h6>
      <input
        className="w-2/4 mt-12 h-[4ch] text-lg px-3 py-2 rounded bg-design-grey text-design-blue placeholder-design-blue outline-design-blue"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* footer */}
      <div className="flex justify-end items-center w-screen h-16 absolute bottom-0 bg-design-grey text-design-blue ">
        <button
          onClick={() => Navigate("/resume")}
          className="mr-10 px-4 py-2 border rounded text-design-grey border-design-blue text-base bg-design-blue
        hover:bg-design-purple hover:border-design-purple hover:text-white"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
