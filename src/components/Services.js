import React from "react";

const Services = () => {
  return (
    <div className="mb-10 -mt-24">
      <div className="featured w-[1200px] mx-auto grid grid-cols-4 gap-10 ">
        <div className="textSection w-[250px] z-60 mt-10">
          <h2 className="text-[40px] font-bold text-black">Featured</h2>
          <h2 className="text-[40px] font-bold text-blue-800">Movies</h2>

          <p className="text-base">
            Watch and download full film, seasons and episodes movies & TV shows
            online or stream right to your smart TV, game console, PC, Mac,
            mobile, tablet and more.
          </p>
        </div>

        <div className="card cursor-pointer shadow-lg shadow-gray-600 rounded-t-3xl rounded-b-2xl">
          <div className="pictureSection shadow-sm shadow-gray-600 h-[450px] rounded-t-3xl rounded-b-2xl flex flex-col items-center">
            <img
              className="rounded-3xl hover:bg-blue-700 hover:opacity-60"
              src="https://res.cloudinary.com/imajin/image/upload/v1592043744/movie/movie2_cxxamr.jpg"
              alt=""
            />
            <h3 className="mt-3 text-lg font-semibold">
              Cras cronvallis lacus
            </h3>
          </div>
        </div>
        <div className="card cursor-pointer shadow-lg shadow-gray-600 rounded-t-3xl rounded-b-2xl">
          <div className="pictureSection shadow-sm shadow-gray-600 h-[450px] rounded-t-3xl rounded-b-2xl flex flex-col items-center">
            <img
              className="rounded-3xl hover:bg-blue-700 hover:opacity-60"
              src="https://res.cloudinary.com/imajin/image/upload/v1592043744/movie/movie3_a5wvov.png"
              alt=""
            />
            <h3 className="mt-3 text-lg font-semibold">
              Cras cronvallis lacus
            </h3>
          </div>
        </div>
        <div className="card cursor-pointer shadow-lg shadow-gray-600 rounded-t-3xl rounded-b-2xl">
          <div className="pictureSection shadow-sm shadow-gray-600 h-[450px] rounded-t-3xl rounded-b-2xl flex flex-col items-center">
            <img
              className="rounded-3xl hover:bg-blue-700 hover:opacity-60"
              src="https://res.cloudinary.com/imajin/image/upload/v1592043731/movie/movie4_gsfgzx.jpg"
              alt=""
            />
            <h3 className="mt-3 text-lg font-semibold">
              Cras cronvallis lacus
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-10 w-[1450px] mx-auto">
        <div className="col-span-3 h-[350px] rounded-2xl relative cursor-pointer z-50">
          <img
            className="h-full w-full rounded-2xl hover:scale-125"
            src="https://res.cloudinary.com/imajin/image/upload/v1592043739/movie/trending1_lycszf.jpg"
            alt=""
          />
          <div className="text-[30px] flex justify-center items-center absolute h-full w-full bg-gradient-to-r from-[#ae44ff] to-[#ff0444] opacity-50 text-white top-0 rounded-2xl cursor-pointer"></div>
          <div className="text-[30px] flex justify-center items-center absolute h-full w-full top-0 text-white">
            <p className="text-4xl">Free Rent 3 Days</p>
          </div>
        </div>
        <div className="col-span-6 h-[350px] rounded-2xl relative ">
          <img
            className="h-full w-full rounded-2xl"
            src="https://res.cloudinary.com/imajin/image/upload/v1592043742/movie/trending2_x3cuwt.jpg"
            alt=""
          />

          <div className="text-[30px] flex justify-center items-center absolute h-full w-full opacity-50 text-white top-0 rounded-2xl bg-gradient-to-r from-[#1733e8] to-[#330d36] cursor-pointer"></div>
          <div className="text-[30px] flex justify-center items-center absolute h-full w-full top-0 text-white cursor-pointer">
            <p className="text-4xl">Free Movies</p>
          </div>
        </div>
        <div className="col-span-3 h-[350px] rounded-2xl relative">
          <img
            className="h-full w-full rounded-2xl"
            src="https://res.cloudinary.com/imajin/image/upload/v1592043739/movie/trending1_lycszf.jpg"
            alt=""
          />

          <div className="text-[30px] flex justify-center items-center absolute h-full w-full opacity-50 rounded-2xl text-white top-0 bg-gradient-to-r from-[#ae44ff] to-[#ff0444] cursor-pointer"></div>
          <div className="text-[30px] flex justify-center items-center absolute h-full w-full top-0 text-white cursor-pointer">
            <p className="text-4xl">Free upto 5 <br /> &nbsp;&nbsp; Episodes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
