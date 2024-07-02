import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Nav";
import GalleryShimmer from "../../components/gallerySkeleton";
import LazyImage from "../../components/lazyloader";
import { ImageArr } from "../../Lib/Images";
const image0 = React.lazy(() => import('../../../public/gallery/IMG(22).jpg'));
const image1 = React.lazy(() => import('../../../public/gallery/IMG(23).jpg'));
const image2 = React.lazy(() => import('../../../public/gallery/IMG(24).jpg'));
const image3 = React.lazy(() => import('../../../public/gallery/IMG(25).jpg'));
const image4 = React.lazy(() => import('../../../public/gallery/IMG(26).jpg'));
const image5 = React.lazy(() => import('../../../public/gallery/IMG(27).jpg'));
const image6 = React.lazy(() => import('../../../public/gallery/IMG(28).jpg'));
const image7 = React.lazy(() => import('../../../public/gallery/IMG(29).jpg'));
const image8 = React.lazy(() => import('../../../public/gallery/IMG(30).jpg'));
const image9 = React.lazy(() => import('../../../public/gallery/IMG(31).jpg'));
const image10 = React.lazy(() => import('../../../public/gallery/IMG(32).jpg'));
const image11 = React.lazy(() => import('../../../public/gallery/IMG(33).jpg'));
const image12 = React.lazy(() => import('../../../public/gallery/IMG(34).jpg'));
const image13 = React.lazy(() => import('../../../public/gallery/IMG(35).jpg'));
const image14 = React.lazy(() => import('../../../public/gallery/IMG(36).jpg'));
const image15 = React.lazy(() => import('../../../public/gallery/IMG(37).jpg'));
const image16 = React.lazy(() => import('../../../public/gallery/IMG(38).jpg'));
const image17 = React.lazy(() => import('../../../public/gallery/IMG(39).jpg'));
const image18 = React.lazy(() => import('../../../public/gallery/IMG(40).jpg'));
const image19 = React.lazy(() => import('../../../public/gallery/IMG(41).jpg'));
const image20 = React.lazy(() => import('../../../public/gallery/IMG(42).jpg'));
const image21 = React.lazy(() => import('../../../public/gallery/IMG(43).jpg'));

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
           src:'../../../public/gallery/IMG(22).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(23).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(24).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(25).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(26).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(27).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(28).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(29).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(30).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(31).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(32).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(33).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(34).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(35).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(36).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(37).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(38).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(39).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(40).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(41).jpg',
           alt:""
            },
           {
           src:'../../../public/gallery/IMG(42).jpg',
           alt:""
            }
    ,] }]
  ,
  [{data:
   [ 
    {
           src:'../../../public/gallery/IMG(4).jpg',
           alt:""
            },
    ,] }]
  ,

 
]

export default PortfolioPage;
