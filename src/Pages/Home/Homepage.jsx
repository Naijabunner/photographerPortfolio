import {stagger, AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import img  from "../../assets/great.jpeg";
const Homepg = () => {
  const [loader, setLoader] = useState(false);
  if (loader) {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }

  return (
    <>
    <AnimatePresence mode="sync">
    {loader?(
            <div className="w-screen h-screen flex justify-center items-center">
            {" "}
            <motion.div className="w-40 h-2 rounded-xl bg-black flex justify-center items-center">
              <motion.div className="loader bg-white w-14 rounded-xl h-1 "
              whileInView={{ 
                x: [-50,50,-50],
              }}
              transition={{duration: 2, repeat: Infinity, spring: 1}}
              
              />
            </motion.div>
          </div>
    ):(
      <motion.section
      className="flex max-h-screen w-screen relative"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white w-0 sm:w-[60vw] flex justify-center items-center">
        <div className="">
          <h2 className="text-[7vw] font-bold">
            My name is
            <br />
            James Onyekachi
          </h2>
          <p className=" text-[2vw] text-center my-5">
            And am showing you the world through my lens
          </p>
          <div className="btns flex justify-evenly mt-2">
            <a href="/portfolio">
              <motion.button
                className="Landing_page_btn bg-black text-white font-bold text-[3vw]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                
              >
                Portfolio
              </motion.button>
            </a>
            <a href="/contact">
              <motion.button
                className="Landing_page_btn bg-gray-300 text-black font-bold text-[3vw] p-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                Contact Me
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      {/* smaller screens */}
      <div className="img  w-[100vw] sm:w-[40vw] max-h-screen min-h-screen flex justify-center items-end pb-10">
        <div className="mb-10 sm:hidden">
          <h2 className="text-[12vw] font-bold text-white">
            My name is
            <br />
            James Onyekachi
          </h2>
          <p className=" text-[6vw] text-center text-white my-5">
            And am showing you the world through the lens
          </p>
          <div className="btns flex justify-evenly mt-4 text-white">
            <a href="/portfolio">
              <motion.button
                className="Landing_page_btn bg-white text-black font-bold text-[5vw]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                Portfolio
              </motion.button>
            </a>
            <a href="/contact">
              <motion.button
                className="Landing_page_btn backdrop-blur-xl text-black font-bold text-[5vw] p-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                Contact Me
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <a href="/">
        {" "}
        <h1 className="absolute left-5 top-5 text-5xl font-bold sm:text-gray-400 text-black">
          JO
        </h1>
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-5 left-20 w-5 sm:fill-gray-400 fill-black dark:fill-dark text-5xl font-bold text-gray-400"
        viewBox="0 0 384 512"
      >
        <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
      </svg>
    </motion.section>
    )}
  </AnimatePresence>
      
    </>
  );
};

export default Homepg;
