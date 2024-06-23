import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Nav";
import GalleryShimmer from "../../components/gallerySkeleton";
import LazyImage from "../../components/lazyloader";

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

      <main id="main" className=" flex overflow-hidden mt-20 m-5">
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
<ImagesContainer/>
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
const ImagesContainer=()=>{
  return(
    <>
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
              <LazyImage
                skeleton={GalleryShimmer}
                src={ent.src}
                alt={ent.alt}
              />
            </motion.div>
          );
        })}
      </div>
    );
  })
}</>
  )
}
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
