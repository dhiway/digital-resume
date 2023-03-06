import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCards from "../components/JobCards";

const Home = () => {
  const fakeResults = [
    {
      name: "Dhiway Networks Pvt Ltd",
      skills: "Javascript, Typescript, React, Rust",
    },
    { name: "Affinidi", skills: "Javascript, Typescript, React, Rust" },
    {
      name: "EkStep Foundation",
      skills: "CopyWritting, WordPress, JavaScript, Web Design",
    },
    { name: "ONDC", skills: "Javascript, Typescript, React, Rust, databases" },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState(fakeResults);
  const Navigate = useNavigate();

  const handleSearch = (e) => {
    let resultArr = [];
    if (e.code === "Enter") {
      console.log("Fix me: add a search api call");
      if(searchInput === ''){
        return setResults(fakeResults)
      }
      fakeResults.forEach((result) => {
        if (
          searchInput !== "" &&
          result.skills
            .toLowerCase()
            .slice(",")
            .includes(searchInput.toLowerCase())
        ) {
          resultArr.push(result);
        }
      });
      resultArr.length > 0
        ? setResults(resultArr)
        : setResults([{ failedLoad: true }]);
    }
  };
  return (
    <div className="flex flex-col items-center w-full h-screen relative">
      <h6 className="mt-10 text-design-grey text-2xl cursor-default">
        Search for your DreamJob here
      </h6>
      {/* search bar */}
      <input
        className="w-2/4 mt-12 h-[4ch] text-lg px-3 py-2 rounded bg-design-grey text-design-blue placeholder-design-blue outline-design-blue"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onKeyDown={handleSearch}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {/* results */}

      {results.length > 0 && results[0].failedLoad ? (
        <div className="h-3/4 flex justify-center items-center">
          <p className=" text-gray-400 text-lg ">No results found</p>
        </div>
      ) : results.length === 0 ? (
        <div className="h-3/4 flex justify-center items-center">
          <p className=" text-gray-400 text-lg ">
            Go ahead. What are you waiting for?
          </p>
        </div>
      ) : (
        <div className="mt-4 w-3/4 grid grid-cols-1">
          {results.map((item, i) => {
            return <JobCards key={i} keyId={i} name={item.name} skills={item.skills} />;
          })}
        </div>
      )}

      {/* footer */}
      <div className="flex justify-end items-center w-screen h-16 fixed bottom-0 bg-design-grey text-design-blue ">
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
