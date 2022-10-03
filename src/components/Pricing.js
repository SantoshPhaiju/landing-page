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
          <div className="freePlan rounded-3xl h-[450px] w-[300px] bg-white border shadow-lg shadow-gray-500 hover:border-blue-600 hover:shadow-blue-800/60 hover:shadow-2xl flex justify-center items-center flex-col">
            <div className=" text-xl text-blue-800 font-bold">BASIC </div>
            <br />
            <div className="text-4xl text-black font-bold">Free </div>

            <div className="items w-[94%] my-4">
                <div className="first border-b-2 border-dashed text-center text-2xl">
                    First
                </div>
                <div className="first">
                    Second
                </div>
                <div className="first">
                    Third
                </div>
            </div>
          </div>
          <div className="freePlan rounded-xl h-[400px] w-[300px] bg-black"></div>
          <div className="freePlan rounded-xl h-[400px] w-[300px] bg-black"></div>
          <div className="freePlan rounded-xl h-[400px] w-[300px] bg-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
