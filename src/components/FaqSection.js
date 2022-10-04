import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React, { useState } from "react";

const FaqSection = () => {
  const [open, setOpen] = useState(null);

  const data = [
    {
      id: 1,
      title: "Title 1",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptatum rerum consectetur eligendi a perferendis quis fugiat aliquam labore, aut, nemo eaque amet, quibusdam        ullam! Praesentium provident maiores expedita quasi.",
    },
    {
      id: 2,
      title: "Title 2",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptatum rerum consectetur eligendi a perferendis quis fugiat aliquam labore, aut, nemo eaque amet, quibusdam        ullam! Praesentium provident maiores expedita quasi.",
    },
    {
      id: 3,
      title: "Title 3",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptatum rerum consectetur eligendi a perferendis quis fugiat aliquam labore, aut, nemo eaque amet, quibusdam        ullam! Praesentium provident maiores expedita quasi.",
    },
    {
      id: 4,
      title: "Title 4",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptatum rerum consectetur eligendi a perferendis quis fugiat aliquam labore, aut, nemo eaque amet, quibusdam        ullam! Praesentium provident maiores expedita quasi.",
    },
    {
      id: 5,
      title: "Title 5",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptatum rerum consectetur eligendi a perferendis quis fugiat aliquam labore, aut, nemo eaque amet, quibusdam        ullam! Praesentium provident maiores expedita quasi.",
    },
  ];

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section>
      <div className="container grid grid-cols-12 gap-10 w-[1200px] mx-auto mt-20 mb-20">
        <div className="col-span-6">
          <h2 className="text-4xl font-sans text-black font-bold capitalize">
            frequently
          </h2>
          <h2 className="text-4xl font-sans mt-2 text-blue-600 font-bold capitalize mb-6">
            Answered Questions
          </h2>

          <span className="text-3xl mt-4">
            Have a question? Check out our frequently asked questions to find
            your answer.
          </span>

          <img
            src="https://luxiren-react.vercel.app/_next/static/images/faq-b09fb3c9b96b0ee06930bb494c74af54.png"
            alt="here is faq imagessss okey!!!"
            className=" max-w-[48%] mt-8 ml-10"
          />
        </div>
        <div className="col-span-6">
          <div className="accordianContainer flex flex-col gap-6">
            {data.map((item, index) => {
              return (
                <div
                  className="accordianItem shadow-lg cursor-pointer shadow-gray-200 rounded-b-xl"
                  onClick={(e) => toggle(index)}
                  key={index}
                >
                  <div
                    className={
                      open === Number(index)
                        ? `accordianHeading py-4 px-4 bg-pink-700 text-white rounded-t-xl text-xl flex justify-between`
                        : `accordianHeading py-4 px-4 bg-white border-t-2 border-gray-100 text-black rounded-xl text-xl flex justify-between`
                    }
                  >
                    {item.title}
                    {open === Number(index) ? (
                      <KeyboardArrowUp className="mr-0" />
                    ) : (
                      <KeyboardArrowDown className="mr-0" />
                    )}
                  </div>
                  {open === Number(index) && (
                    <div className="accordianContene px-4 text-justify bg-slate-100 py-3 rounded-b-xl">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
