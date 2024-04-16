import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BANNER } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 h-screen w-screen">
        <img
          className="h-full w-full object-cover object-center"
          src={BANNER}
          alt="banner"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
