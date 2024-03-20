import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const PortfolioPage = () => {
    const [isvisible, setIsvisible] = useState(false);
    const HandleToggle = () => {
      setIsvisible((prev) => !prev);
    };
    return (
      <>
        <nav className="absolute left-5 top-5 flex justify-between items-center bg-none w-[90%]">
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
          <p className="block md:hidden"> 
          <svg xmlns="http://www.w3.org/2000/svg" className=' w-7' viewBox="0 0 512 512" onClick={HandleToggle}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </p>
        </nav>
        
        <main id="main" className=" flex  mt-12 overflow-hidden ">
        <h2 className='text-3xl mt-5 ml-10 font-semibold '>
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
            className="mySwiper sm:h-[80vh] w-screen  h-[60vh] pb-10"
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
        <AnimatePresence>
          {isvisible && (
            <motion.nav
              className="bg-black w-screen h-screen absolute top-0 z-50"
              initial={{ scale: 0.5, y: "-100%", opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.5, x: "-100%", opacity: 1 }}
            >
              <p className="block md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={HandleToggle}className=" w-7 fill-white mt-3 ml-5 cursor-pointer"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
              </p>
              <section className="  text-white flex justify-center items-center flex-col h-[80vh] text-3xl">
                <a
                  href="/"
                  className=" space-x-4  border-b-2 p-2 w-[50%] text-center"
                >
                  Home
                </a>
                <a
                  href="/portfolio"
                  className=" space-x-4  border-b-2 p-2 w-[50%] text-center"
                >
                  Portfolio
                </a>
                <a
                  href="/contact"
                  className=" space-x-4  border-b-2 p-2 w-[50%] text-center"
                >
                  Contact
                </a>
              </section>
            </motion.nav>
          )}
        </AnimatePresence>
      </>
    );
}
 
export default PortfolioPage;