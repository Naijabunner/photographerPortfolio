import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Nav";
import GalleryShimmer from "../../components/gallerySkeleton";
import LazyImage from "../../components/lazyloader";
import { ImageArr } from "../../Lib/Images";
import image0 from '../../../public/gallery/IMG(22).jpg'
import image1  from '../../../public/gallery/IMG(23).jpg';
import image2  from '../../../public/gallery/IMG(24).jpg';
import image3  from '../../../public/gallery/IMG(25).jpg';
import image4  from '../../../public/gallery/IMG(26).jpg';
import image5  from '../../../public/gallery/IMG(27).jpg';
import image6  from '../../../public/gallery/IMG(28).jpg';
import image7  from '../../../public/gallery/IMG(29).jpg';
import image8  from '../../../public/gallery/IMG(30).jpg';
import image9  from '../../../public/gallery/IMG(31).jpg';
import image10  from '../../../public/gallery/IMG(32).jpg';
import image11  from '../../../public/gallery/IMG(33).jpg';
import image12  from '../../../public/gallery/IMG(34).jpg';
import image13  from '../../../public/gallery/IMG(35).jpg';
import image14  from '../../../public/gallery/IMG(36).jpg';
import image15  from '../../../public/gallery/IMG(37).jpg';
import image16  from '../../../public/gallery/IMG(38).jpg';
import image17  from '../../../public/gallery/IMG(39).jpg';
import image18  from '../../../public/gallery/IMG(40).jpg';
import image19  from '../../../public/gallery/IMG(41).jpg';
import image20  from '../../../public/gallery/IMG(42).jpg';
import image21  from '../../../public/gallery/IMG(43).jpg';

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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 "
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
              className="rounded-lg bg-gray-300 bg-opacity-10"
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




// const images =
// [
  
//    [{data:[ {
//     src:'../../../public/gallery/IMG(22).jpg',
//    alt:""
//     },
//    {
//    src:'../../../public/gallery/IMG(23).jpg',
//    alt:""
//     },
//    {
//    src:'../../../public/gallery/IMG(24).jpg',
//    alt:""
//     },
    
//   ]}]
//   ,
//   [{data:
//    [{
//     src:'../../../public/gallery/IMG(25).jpg',
//     alt:""
//      },
//     {
//     src:'../../../public/gallery/IMG(26).jpg',
//     alt:""
//      },
//     {
//     src:'../../../public/gallery/IMG(27).jpg',
//     alt:""
//      },] }]
//   ,
//   [{data:
//    [ {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },
//     {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },
//     {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },] }]
//   ,
//   [{data:
//    [ {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },
//     {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },
//     {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },] }]
//   ,
//   [{data:
//    [ {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },
//     {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },
//     {
//    src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//    alt:""
//     },] }]
//   ,
 
// ]
const images =
[
  [{data:
   [ 
    {
           src:image0,
           alt:""
            },
           {
           src:image1,
           alt:""
            },
           {
           src:image2,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image3,
           alt:""
            },
           {
           src:image4,
           alt:""
            },
           {
           src:image5,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image6,
           alt:""
            },
           {
           src:image7,
           alt:""
            },
           {
           src:image8,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image9,
           alt:""
            },
           {
           src:image10,
           alt:""
            },
           {
           src:image11,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image12,
           alt:""
            },
           {
           src:image13,
           alt:""
            },
           {
           src:image14,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image15,
           alt:""
            },
           {
           src:image16,
           alt:""
            },
           {
           src:image17,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image18,
           alt:""
            },
           {
           src:image19,
           alt:""
            },
           {
           src:image20,
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:image21,
           alt:""
            },
    ,] }]
  ,

 
]

export default PortfolioPage;
