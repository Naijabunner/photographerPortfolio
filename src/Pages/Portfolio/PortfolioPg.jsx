import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const PortfolioPage = () => {
    return (
      <>
        <nav className="absolute left-5 top-5 flex justify-between bg-none w-[90%]">
          <a href="/">
            {" "}
            <h1 className=" text-5xl font-bold">JO</h1>
          </a>

          <div className="navLinks text-3xl font-medium md:flex justify-center items-center  hidden">
            <a href="/">
              <p className="mx-5">Home</p>
            </a>
            <a href="/portfolio">
              {" "}
              <p className="mx-5">Portfolio</p>
            </a>
            <a href="/contact">
              <p className="mx-5">Contact Me</p>
            </a>
          </div>
          <p className="block md:hidden"> bars</p>
        </nav>
        
        <main id="main" className=" flex  mt-16 overflow-hidden">
        <h2 className='text-3xl mt-5 ml-10 font-semibold'>
            PORTFOLIO
        </h2>
          <Swiper
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
            className="mySwiper h-[80vh] w-screen"
          >
            <SwiperSlide id="sliderImgWrapper" className=" w-fit relative">
              <div id="sliderImg" className="w-fit h-[85%] relative">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                <div className="w-[60%] h-[30%] backdrop-blur-3xl bottom-3 right-2 rounded-md absolute pl-2">
                    <h6>
                        Image title
                    </h6>
                    <p>
                        description
                    </p>
                    <p>
                        technical description
                    </p>
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
            <SwiperSlide id="sliderImgWrapper" className=" w-fit">
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
}
 
export default PortfolioPage;