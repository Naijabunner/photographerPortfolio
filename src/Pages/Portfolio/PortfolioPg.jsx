import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Nav";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PortfolioPage = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const themeMode = sessionStorage.getItem("mode");
    const parsethemeMode = JSON.parse(themeMode);

    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      parsethemeMode === "dark"
    ) {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <section className="overflow-hidden h-full">
      <Navbar />

      <main id="main" className=" flex overflow-hidden mt-20">
        <h2 className="text-3xl font-mono first-letter:text-4xl mt-5 ml-10 font-semibold text-center flex justify-center items-center dark:text-white">
          GALLERY
        </h2>

        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 "
        >
         {
  images.map((entries, outerIndex) => {
    return (
      <div key={outerIndex} className="grid gap-4">
        {entries[0]?.data?.map((ent, innerIndex) => {
          return (
            <motion.div key={innerIndex}
              
              variants={{
                initial: {
                  scale: 0.5,
                  y: 50,
                  opacity: 0,
                },
                animate: {
                  scale: 1,
                  y: 0,
                  opacity: 1,
                },
              }}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={ent.src}
                alt={ent.alt}
              />
            </motion.div>
          );
        })}
      </div>
    );
  })
}

            {/* <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
              </div>
            </div> */}
        </motion.div>
      </main>

      <Footer />
    </section>
  );
};
const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-2xl text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @Okechukwudaniel
        </a>
      </p>
    </footer>
  );
};
const images =
[
  
   [{data:[ {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },
    {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },
    {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    }]}]
  ,
  [{data:
   [ {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },
    {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },
    {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },] }]
  ,
  [{data:
   [ {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },
    {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },
    {
   src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
   alt:""
    },] }]
  ,
 
]

export default PortfolioPage;
