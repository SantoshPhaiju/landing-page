import { Star, StarHalf } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <div className="container h-[450px] w-[1000px] mx-auto rounded-3xl bg-[#e9dcdc] z-50 shadow-lg text-black mb-20 relative bottom-32 ">
      <div className="inner flex items-center justify-center space-x-12 ">
        <div className="left w-[600px]">
          <p className="text-lg">Vivamus sit amet</p>
          <h3 className="text-[40px] font-bold">The Lorem Ipsum Dolor Sit</h3>
          <div className="rating flex items-center">
            <Star color="success" />
            <Star color="success" />
            <Star color="success" />
            <Star color="success" />
            <StarHalf color="success" />
            <p className="inline-block ml-5">4.5 &nbsp; | &nbsp; 2h 15m</p>
          </div>
          <p className="text-lg mt-4">
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
            eget suscipit orci.
          </p>satosh gadha badar
          

          <div className="buttons flex space-x-2 items-center mt-10">
            <Button variant="text" className="px-2 py-2 text-lg">
              {" "}
              WATCH TRAILER{" "}
            </Button>
            <Button
              variant="contained"
              className="rounded-3xl px-8 py-2 text-lg bg-pink-800"
            >
              {" "}
              WATCH FULL MOVIE{" "}
            </Button>
          </div>
        </div>
        <div className="right w-[250px]">
          <div className="image bg-black mt-10 shadow-lg rounded-3xl">
            <img
              src="https://res.cloudinary.com/imajin/image/upload/v1592043744/movie/movie3_a5wvov.png"
              alt=""
              height={100}
              width={250}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
