import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <iframe
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Movie No Sound"
        width="100%"
        height="800"
        src="https://www.youtube.com/embed/CK1ndZEkBcE?autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;mute=1&amp;origin=https%3A%2F%2Fluxiren-react.vercel.app&amp;enablejsapi=1&amp;widgetid=1"
        id="widget2"
        className="relative"
        style={{ borderRadius: "0 0 50% 50%/0 0 15% 15%", height: "90vh" }}
      ></iframe>

      <div
        className="bg-[#000000a4] absolute w-full h-[90vh]  top-0 text-white z-30"
        style={{ borderRadius: "0 0 50% 50%/0 0 20% 20%", height: "90vh" }}
      >
        <div className="para z-50 absolute bottom-40 left-32">
          <p className="text-[30px]">Vivamus sit amet interdum elit</p>
          <p className="text-[50px]"> Mancing Mania The Movie</p>
          <p className="text-3xl mt-1"> On the air 01 . 11 . 20</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
