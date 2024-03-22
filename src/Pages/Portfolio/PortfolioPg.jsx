import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Nav";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PortfolioPage = () => {
  const [isvisible, setIsvisible] = useState(false);
  const HandleToggle = () => {
    setIsvisible((prev) => !prev);
  };
  return (
    <>
   <Navbar/>

      <main id="main" className=" flex  mt-12 overflow-hidden ">
        <h2 className="text-3xl mt-5 ml-10 font-semibold text-center flex justify-center items-center">
          PORTFOLIO
        </h2>

        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          lazy={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: false,
          }}
          navigation={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper sm:h-[80vh] w-screen  h-[70vh]  border-8 p-5 border-black border-opacity-[0.3] shadow-inner rounded-md  backdrop-blur-3xl border-double"
        >
          <SwiperSlide
            id="sliderImgWrapper"
            className=" w-fit relative bg-transparent"
          >
            <div
              id="sliderImg"
              className="w-fit h-[85%] relative bg-transparent"
            >
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              <div className="w-[60%] h-[30%] backdrop-blur-3xl bottom-3 right-2 rounded-md absolute pl-2">
                <h6>Image title</h6>
                <p>description</p>
                <p>technical description</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="sliderImgWrapper" className=" w-fit">
            <div id="sliderImg" className="w-fit h-[85%]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide id="sliderImgWrapper" className=" w-fit">
            <div id="sliderImg" className="w-fit h-[85%]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide id="sliderImgWrapper" className=" w-fit">
            <div id="sliderImg" className="w-fit h-[85%]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide id="sliderImgWrapper" className=" w-fit">
            <div id="sliderImg" className="w-fit h-[85%]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide id="sliderImgWrapper" className=" w-fit">
            <div id="sliderImg" className="w-fit h-[85%]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide id="sliderImgWrapper" className=" w-fit ">
            <div id="sliderImg" className="w-fit h-[85%]">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
        </Swiper>
      </main>
      
    </>
  );
};

export default PortfolioPage;
