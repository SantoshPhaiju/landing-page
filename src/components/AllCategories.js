import { Bolt, EmojiEmotions, Favorite, OndemandVideo, Star, TheaterComedy, Videocam } from "@mui/icons-material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const AllCategories = () => {
  return (
    <section className="mt-4 mb-10">
      <div className="allCategories">
        <h2 className="text-4xl font-serif text-black font-bold text-center">
          All
        </h2>
        <h2 className="text-4xl font-serif text-blue-600 font-bold text-center">
          Categories
        </h2>

        <div className="icons w-[1000px] mx-auto">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1 ml-4 mr-4">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <Favorite color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    Romantic
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <Videocam color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    HollyWood
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <EmojiEmotions color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    Comedy
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <Star color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl text-center">
                    Super&nbsp;Heroes
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <Bolt color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    Actions
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <TheaterComedy color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    Sci-Fi
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <OndemandVideo color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    BollyWood
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <Bolt color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    Actions
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item bg-gradient-to-r rounded-xl from-pink-500 via-red-500 to-yellow-500 h-[102px] w-[102px] p-1">
                <span className="w-[94px] mb-3 h-[94px] rounded-xl bg-white flex items-center justify-center">
                  <EmojiEmotions color="primary" className="w-40 h-16" />
                </span>

                <span className="text-black text-xl">
                    Comedy
                </span>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
