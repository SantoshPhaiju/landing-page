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

      <div className="mainContainer grid grid-cols-12 gap-10 w-[1200px] mx-auto mb-10 mt-10">
        <div className="left col-span-6 bg-[#1a2484] rounded-2xl flex items-center justify-center space-x-32 relative h-[270px] overflow-hidden">
            <img src="https://res.cloudinary.com/imajin/image/upload/v1592043718/movie/cat3_pfb5um.png" alt="" className="absolute opacity-20 -left-20 w-80 mt-28 overflow-hidden" />
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
            <Button variant="outlined" className="rounded-3xl px-24 text-white text-xl mt-10">Explore</Button>
            </span>
        </div>
        <div className="right col-span-6">

        </div>
      </div>
    </section>
  );
};

export default Categories;
