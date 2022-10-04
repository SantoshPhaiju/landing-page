import { Button } from "@mui/material";
import React from "react";

const Pricing = () => {
  return (
    <section className="mt-20 mb-6">
      <h2 className="text-4xl font-serif text-black font-bold text-center">
        Flexible
      </h2>
      <h2 className="text-4xl font-serif text-blue-600 font-bold text-center">
        Pricing And Plan
      </h2>

      <div className="pricing w-[1300px] mx-auto mt-10 mb-10">
        <div className="pricingContainer flex justify-center items-center gap-8">
          <div className="freePlan rounded-[50px] h-[450px] w-[300px] bg-white border shadow-lg shadow-gray-500 hover:border-blue-600 hover:shadow-blue-800/60 hover:shadow-2xl flex justify-center items-center flex-col">
            <div className=" text-xl text-blue-800 font-bold">BASIC </div>
            <br />
            <div className="text-4xl text-black font-bold">Free </div>

            <div className="items w-[90%] my-4">
              <div className="first border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Nam sollicitudin dignissim
              </div>
              <div className="second border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Cras convallis lacus
              </div>
              <div className="third text-center text-lg py-2">
                Quisque ut metus
              </div>
              <br />
              <div className="text text-base text-center text-gray-400 font-thin">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </div>
              <div className="button flex justify-center items-center">
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white text-base w-[80%] bg-blue-700 rounded-3xl mx-auto px-4 py-2 mt-8"
                >
                  {" "}
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
          <div className="bestValue rounded-[30px] h-[550px] w-[300px] bg-white shadow-lg shadow-gray-500 hover:border-red-600 hover:border hover:shadow-red-800/60 hover:shadow-2xl flex justify-center items-center flex-col relative border-red-700">
            <div className="headingText bg-gradient-to-r from-blue-700 to-red-500 h-36 w-full absolute top-0 rounded-t-[30px] flex justify-center items-center rounded-b-[50%] flex-col">
              <h4 className="uppercase text-white text-xl">Best Value</h4>
              <h4 className="text-3xl text-white font-sans font-bold mt-4">
                $24
              </h4>
            </div>

            <div className="items w-[90%] my-4 mt-40">
              <div className="first border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Nam sollicitudin dignissim
              </div>
              <div className="second border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Cras convallis lacus
              </div>
              <div className="third border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Quisque ut metus
              </div>
              <div className="fourth border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Vivamus sit amet
              </div>
              <div className="fifth text-center text-lg py-2">
                Quisque ut metus
              </div>
              <br />
              <div className="text text-base text-center text-gray-400 font-thin">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </div>
              <div className="button flex justify-center items-center">
                <Button
                  variant="contained"
                  color="error"
                  className="text-white text-base w-[80%] bg-pink-700 rounded-3xl px-4 py-2 mt-8 mx-auto"
                >
                  {" "}
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
          <div className="pro rounded-[40px] h-[520px] w-[300px] bg-white border shadow-lg shadow-gray-500 hover:border-red-600 hover:shadow-red-800/60 hover:shadow-2xl flex justify-center items-center flex-col">
            <div className="headingText w-full flex justify-center items-center flex-col mt-10">
              <h4 className="uppercase text-pink-700 text-xl font-bold ">
                Pro
              </h4>
              <h4 className="text-3xl text-black font-sans font-bold mt-4">
                $54
              </h4>
            </div>

            <div className="items w-[90%] my-4">
              <div className="first border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Nam sollicitudin dignissim
              </div>
              <div className="second border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Cras convallis lacus
              </div>
              <div className="third border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Quisque ut metus
              </div>
              <div className="fourth border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Vivamus sit amet
              </div>
              <div className="fifth text-center text-lg py-2">
                Quisque ut metus
              </div>
              <br />
              <div className="text text-base text-center text-gray-400 font-thin">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </div>
              <div className="button flex justify-center items-center">
                <Button
                  variant="contained"
                  color="error"
                  className="text-white text-base w-[80%] bg-pink-700 rounded-3xl px-4 py-2 mt-8 mx-auto"
                >
                  {" "}
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
          <div className="enterprise rounded-[40px] h-[520px] w-[300px] bg-white border shadow-lg shadow-gray-500 hover:border-red-600 hover:shadow-red-800/60 hover:shadow-2xl flex justify-center items-center flex-col">
            <div className="headingText w-full flex justify-center items-center flex-col mt-10">
              <h4 className="uppercase text-pink-700 text-xl font-bold ">
                Enterprise
              </h4>
              <h4 className="text-3xl text-black font-sans font-bold mt-4">
                $99
              </h4>
            </div>

            <div className="items w-[90%] my-4">
              <div className="first border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Nam sollicitudin dignissim
              </div>
              <div className="second border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Cras convallis lacus
              </div>
              <div className="third border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Quisque ut metus
              </div>
              <div className="fourth border-b-2 border-dashed text-center text-lg py-2 border-gray-200">
                Vivamus sit amet
              </div>
              <div className="fifth text-center text-lg py-2">
                Quisque ut metus
              </div>
              <br />
              <div className="text text-base text-center text-gray-400 font-thin">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </div>
              <div className="button flex justify-center items-center">
                <Button
                  variant="contained"
                  color="error"
                  className="text-white text-base w-[80%] bg-pink-700 rounded-3xl px-4 py-2 mt-8 mx-auto"
                >
                  {" "}
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
