import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./newsswiper.css";

// import required modules
import { Autoplay } from "swiper";

const NewsAndEvent = () => {


    const slideItem = [
        {
            img: "https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/4.jpg",
            heading: "NEWS",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit, eum, corporis alias nobis totam amet voluptas, a cupiditate unde nihil nesciunt."
        },
        {
            img: "https://res.cloudinary.com/walden-global-services/image/upload/v1544584545/dandelion/19.jpg",
            heading: "EVENTS",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit, eum, corporis alias nobis totam amet voluptas, a cupiditate unde nihil nesciunt."
        },
        {
            img: "https://res.cloudinary.com/walden-global-services/image/upload/v1544584543/dandelion/8.jpg",
            heading: "NEWS",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit, eum, corporis alias nobis totam amet voluptas, a cupiditate unde nihil nesciunt."
        },
        {
            img: "https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/20.jpg",
            heading: "Programs",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit, eum, corporis alias nobis totam amet voluptas, a cupiditate unde nihil nesciunt."
        },
        {
            img: "https://res.cloudinary.com/walden-global-services/image/upload/v1544584529/dandelion/10.jpg",
            heading: "workshops",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit, eum, corporis alias nobis totam amet voluptas, a cupiditate unde nihil nesciunt."
        },
    ]


  return (
    <section>
      <div className="swiperNewsDiv w-[1200px] mx-auto my-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="thisSwiper"
        >
          <div className="container grid grid-cols-12 gap-10">
            {slideItem.map((item, index) =>{
                return <SwiperSlide key={index}>
                <div className="col-span-6 grid grid-cols-12 gap-2">
                  <div className="left col-span-3">
                    <img
                      src={item.img}
                      alt="left img here....."
                      className="h-36 w-32 rounded-xl"
                    />
                  </div>
                  <div className="right col-span-9">
                    <div className="heading text-base text-gray-500 ml-1 mb-1 uppercase">
                      {item.heading}
                    </div>
                    <p className="mb-3 text-gray-600 ml-1">
                      {item.content}
                    </p>
  
                    <a
                      href="/"
                      className="text-blue-700 uppercase font-semibold text-sm hover:bg-blue-800/70 py-2 px-3 rounded-2xl hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            })}
            {/*  */}
            
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default NewsAndEvent;
