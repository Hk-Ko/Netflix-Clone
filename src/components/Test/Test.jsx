import { useContext, useEffect, useState } from "react";
import { HiOutlinePlus, HiCheck } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { VscTriangleDown } from "react-icons/vsc";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { BsPlayFill, BsHandThumbsUp, BsChevronDown } from "react-icons/bs";
import {
  useGetMovieDetailQuery,
  useGetMovieQuery,
} from "../../redux/api/movieApi";
import { RiArrowDropRightLine } from "react-icons/ri";

import { ToggleContext } from "../../Context/ToggleProvider";
import MovieDetail from "../Movie/MovieDetail";
import { addMovie, removeMovie } from "../../redux/services/favoritMovieSlice";
import { useDispatch } from "react-redux";

const Test = () => {
    const { handleGetId, modal, toggleModal, togglePlayMovieModal } =
    useContext(ToggleContext);

  const { data } = useGetMovieQuery(35);
  console.log(data?.results);

  const dispatch = useDispatch();

  // Initialize an array of boolean values to track the toggle state for each card
  const [cardToggles, setCardToggles] = useState(
    JSON.parse(localStorage.getItem("cardToggles")) ||
    Array(data?.results?.length).fill(false)
    );
    console.log(cardToggles);
    
    useEffect(() => {
      // Save the cardToggles state to local storage whenever it changes
      localStorage.setItem("cardToggles", JSON.stringify(cardToggles));
    }, [cardToggles]);
    
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data?.results?.length);
  };
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + data?.results?.length) % data?.results?.length
    );
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <>
      <div className="group h-[200px]">
        <div className="flex flex-col gap-2 px-3">
          <div className="flex items-end justify-between w-full">
            <div className="flex items-center gap-1  group/exp cursor-pointer">
              <h1 className="text-xl font-semibold text-gray-50">Test</h1>
              <div className="flex items-center mt-1.5">
                <div className="opacity-0 group-hover/exp:opacity-100 duration-300 group-hover/exp:delay-200">
                  <p className="text-[11px] font-semibold text-blue-300">
                    Explore All
                  </p>
                </div>
                <RiArrowDropRightLine className="text-2xl -translate-x-[60px] text-blue-300 group-hover/exp:translate-x-0 group-hover/exp:delay-0 duration-500 delay-200" />
              </div>
            </div>
            <div className="dots opacity-0 group-hover:opacity-100">
              {[...Array(6)].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${
                    index === currentSlide % 6 ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="carousel-container hover:z-30">
            <div className="carousel">
              <div
                className="slides duration-500 flex items-start gap-1"
                style={{
                  transform: `translateX(-${currentSlide * 166}px)`,
                }}
              >
                {data?.results?.map((result, index) => {
                  const handelPlay = () => {
                    togglePlayMovieModal();
                    handleGetId(result?.id);
                  };
                  const handelDetail = () => {
                    toggleModal();
                    handleGetId(result?.id);
                  };

                  const handleToggle = (index) => {
                    const newCardToggles = [...cardToggles];
                    newCardToggles[index] = !newCardToggles[index];
                    setCardToggles(newCardToggles);
                    // Check the updated value and dispatch actions accordingly
                    if (newCardToggles[index]) {
                      dispatch(addMovie(result));
                    } else {
                      dispatch(removeMovie(result));
                    }
                    // Remove the local storage entry for the toggled card
                    localStorage.removeItem(`cardToggles[${index}]`);
                  };

                  return (
                    <div key={result?.id} className="w-[220px]">
                      <div>
                        <div className="group/item flex flex-col slide-inner lg:hover:scale-150 duration-300 hover:delay-500 rounded-lg">
                          <img
                            onClick={handelDetail}
                            className="cursor-pointer rounded-lg group/edit group-hover/item:rounded-none group-hover/item:delay-300 group-hover/item:duration-500"
                            src={
                              "https://image.tmdb.org/t/p/w300" +
                              result?.backdrop_path
                            }
                            alt=""
                          />
                          <div className="relative group/edit invisible group-hover/item:visible group-hover/item:delay-500 group-hover/item:duration-500 group-hover/item:h-full group-hover/item:p-3 bg-gray-800 h-[0px]">
                            <div className="flex flex-col gap-3 items-start">
                              <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={handelPlay}
                                    className="flex items-center justify-center h-[25px] w-[25px] rounded-full bg-white hover:bg-gray-200 hover:duration-300"
                                  >
                                    <BsPlayFill className="text-xl text-gray-700 ms-0.5" />
                                  </button>
                                  <div onClick={() => handleToggle(index)}>
                                    {/* Use the handleToggle function with the current index */}
                                    {cardToggles[index] ? (
                                      <button className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer">
                                        <HiCheck className="text-sm text-gray-200" />
                                        <div className="invisible group-hover/my-list:visible absolute -right-12 -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-center">
                                          <p className="text-xs font-semibold">
                                            Remove from My List
                                          </p>
                                          <VscTriangleDown className="text-white text-2xl translate-x-[50px] -translate-y-2 absolute" />
                                        </div>
                                      </button>
                                    ) : (
                                      <button className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer">
                                        <HiOutlinePlus className="text-sm text-gray-200" />
                                        <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-center">
                                          <p className="text-xs font-semibold">
                                            Add to My List
                                          </p>
                                          <VscTriangleDown className="text-white text-2xl translate-x-[28px] -translate-y-2 absolute" />
                                        </div>
                                      </button>
                                    )}
                                  </div>
                                  <button className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-transparent ring-1 ring-gray-400 hover:ring-white hover:duration-300">
                                    <BsHandThumbsUp className="text-sm text-gray-200" />
                                  </button>
                                </div>
                                <button
                                  onClick={handelDetail}
                                  className="group/my-list flex items-center justify-center h-[25px] w-[25px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer"
                                >
                                  <BsChevronDown className="text-sm text-gray-200" />
                                  <div className="invisible group-hover/my-list:visible absolute -top-[37px] z-[1008] w-max px-2 py-1 bg-white rounded text-center">
                                    <p className="text-xs font-semibold">
                                      More info
                                    </p>
                                    <VscTriangleDown className="text-white text-2xl translate-x-[15px] -translate-y-2 absolute" />
                                  </div>
                                </button>
                              </div>
                              <h1 className="text-xs text-white">
                                {result?.title}
                              </h1>
                              <h1 className="text-[10px] text-green-500 font-semibold">
                                {result?.vote_average * 10}% Match
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <MdOutlineArrowBackIos
                className="absolute -left-7 top-[50px] text-2xl text-gray-100 opacity-0 group-hover:opacity-100 duration-300"
                onClick={handlePrevSlide}
              />
              <MdOutlineArrowForwardIos
                className="absolute -right-7 top-[50px] text-2xl text-gray-100 opacity-0 group-hover:opacity-100 duration-300"
                onClick={handleNextSlide}
              />
            </div>
          </div>
        </div>
      </div>
      {/* {modal && <MovieDetail />} */}
    </>
  );
};

export default Test;
