import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import image from "../../../public/ptphoto.jpg"
 const Aboutpg = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 pt-20 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >
        <AboutBlock />

      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
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
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};


const AboutBlock = () => (
  <Block className="col-span-12 mt-14 text-3xl leading-snug">
          <img src={image} className=" float-end ml-3 w-40 rounded-lg" alt="" srcset="" />
    <p className=" text-justify">
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ab odit maxime eum aliquid inventore, autem dolores omnis doloremque. Modi placeat dolore doloremque quam! Molestias, omnis aperiam perferendis exercitationem placeat nemo. Repellat minus libero distinctio perspiciatis aperiam eum iure porro, reiciendis, rerum magnam, beatae dolorum quia eligendi optio commodi? Dolore, nesciunt porro quidem error consequatur nam magni ipsum dicta suscipit unde tenetur nostrum alias, voluptate recusandae laudantium in? Repudiandae non minus tenetur mollitia ipsa rerum eaque laborum consectetur tempora in?
      </span>
    </p>  

  </Block>
);




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

export default Aboutpg;
