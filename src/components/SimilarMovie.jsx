import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

const SimilarMovie = ({ result }) => {
  return (
    <div className="w-[250px] h-[300px] bg-[#2F2F2F] rounded overflow-hidden">
      <img
        src={"https://image.tmdb.org/t/p/w300" + result?.backdrop_path}
        alt=""
      />
      <p className="text-sm text-white font-bold px-3">
        {result?.title?.length > 28
          ? `${result?.title?.substring(0, 28)} . . .`
          : result?.title}
      </p>
      <div className="flex justify-between items-center p-3">
        <div className="">
          <p className="font-bold text-green-500">
            <span>{result?.vote_average?.toFixed(1) * 10}%</span> Match
          </p>
          <p className="text-sm font-semibold text-[#747474]">
            Release :{" "}
            <span className="text-base text-white">{result?.release_date}</span>
          </p>
        </div>
        <div className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300 group/edit">
          <HiOutlinePlus className="text-2xl text-gray-200" />
          <div className="hidden group-hover/edit:block absolute -top-[23%] left-[5%] px-3 py-1 bg-white rounded">
            <p className="text-xs font-semibold">Add to My List</p>
          </div>
        </div>
      </div>
      <p className="px-3 text-[#C8C8C8] text-sm tracking-tight">
        {result?.overview?.length > 90
          ? `${result?.overview?.substring(0, 90)} . . .`
          : result?.overview}
      </p>
    </div>
  );
};

export default SimilarMovie;
