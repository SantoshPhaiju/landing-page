import { Button } from "@mui/material";
import React from "react";

const Categories = () => {
  return (
    <section className="mb-4 mt-44 w-[1300px] mx-auto">
      <div className="container grid grid-cols-12 gap-10">
        <div className="first col-span-6">
          <h2 className="text-[40px] font-bold text-black">Top</h2>
          <h2 className="text-[40px] font-bold text-blue-500">Categories</h2>
        </div>

        <div className="card1 col-span-3 bg-[#e79a1c] hover:bg-[#a36c12] text-white rounded-2xl cursor-pointer transition-all duration-500 shadow-lg">
          <div className="layerContent flex justify-center items-center space-x-5">
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043717/movie/cat1_jcxhfm.png"
              alt="this is here"
              className="mt-10"
            />
            <span className="spanDiv">
              <span className="text-lg text-white font-bold">
                ACADEMY AWARDS
              </span>
              <br />
              <span>24 Items</span>
            </span>
          </div>
        </div>
        <div className="card2 col-span-3 bg-[#e91e63] text-white rounded-2xl cursor-pointer hover:bg-[#8e3b57fb] transition-all duration-500 shadow-lg">
          <div className="layerContent flex justify-center items-center space-x-5">
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat2_e8w6bj.png"
              alt="this is here"
              className="mt-10 h-36"
            />
            <span className="spanDiv">
              <span className="text-lg text-white font-bold">ANIMATIONS</span>
              <br />
              <span>24 Items</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mainContainer grid grid-cols-12 grid-rows-6 gap-10 w-[1200px] mx-auto mb-10 mt-10">
        <div className="leftContainer col-span-6 row-span-6 grid-rows-6">
          <div className="left col-span-12 bg-[#1a2484] rounded-2xl flex items-center justify-center space-x-32 relative h-[58%] overflow-hidden">
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat3_pfb5um.png"
              alt=""
              className="absolute opacity-20 -left-20 w-80 mt-28 overflow-hidden"
            />
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat3_pfb5um.png"
              alt="this is here"
              className="mt-10 h-56 absolute -left-24"
            />
            <span className="spanDiv text-white">
              <span className="text-2xl text-white font-bold">Actions</span>
              <br />
              <span>24 Items</span>
              <br />
              <Button
                variant="outlined"
                className="rounded-3xl px-24 text-white text-xl mt-10"
              >
                Explore
              </Button>
            </span>
          </div>
          <br />
          <div className="cardsDiv grid grid-cols-12 gap-10 row-span-2 h-[37%]">
            <div className="card3 col-span-6 bg-[#e91e63] text-white rounded-2xl cursor-pointer hover:bg-[#8e3b57fb] transition-all duration-500 shadow-lg relative">
              <div className="layerContent flex justify-center items-center space-x-5">
                <img
                  src="https://res.cloudinary.com/imajin/image/upload/v1592043724/movie/cat4_k7pe72.png"
                  alt="this is here"
                  className="h-auto max-w-[50%] max-h-[130px] absolute bottom-0 left-5"
                />
                <span className="spanDiv">
                  <span className="text-lg text-white font-bold">
                    Romance Drama
                  </span>
                  <br />
                  <span></span>
                </span>
              </div>
            </div>
            <div className="card4 col-span-6 bg-[#e79a1c] hover:bg-[#a36c12] text-white rounded-2xl cursor-pointer transition-all duration-500 shadow-lg relative ">
              <div className="layerContent flex justify-center items-center space-x-5">
                <img
                  src="https://res.cloudinary.com/imajin/image/upload/v1592043721/movie/cat5_v9qfbf.png"
                  alt="this is here"
                  className="h-auto max-w-[50%] max-h-[130px]"
                />
                <span className="spanDiv flex flex-col items-center justify-center">
                  <span className="text-lg text-white font-bold">Comedy</span>
                  <span>24 Items</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right col-span-6 row-span-6">
          <div className="bg-[#1a2484] rounded-2xl flex items-center justify-center space-x-4 relative overflow-hidden h-full">
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043747/movie/cat6_vuiakg.png"
              alt=""
              className="absolute top-[30px] opacity-10 z-0 scale-125 -left-32 origin-center"
            />
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043747/movie/cat6_vuiakg.png"
              alt="this is here"
              className="max-w-[50%] relative top-[48px]"
            />
            <span className="spanDiv text-white">
              <span className="text-3xl text-white font-bold">
                Super Heroes
              </span>
              <br />
              <span>24 Items</span>
              <br />
              <Button
                variant="outlined"
                className="rounded-3xl px-16 text-white text-xl mt-10 border-2 border-white"
              >
                Explore
              </Button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
