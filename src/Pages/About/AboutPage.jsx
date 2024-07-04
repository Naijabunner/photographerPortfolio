import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import image from "../../../public/ptphoto.jpg"
 const Aboutpg = () => {
  return (
    <div className="min-h-screen dark:bg-zinc-900 px-4 py-12 pt-20 text-zinc-50">
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
  <Block className="col-span-12 mt-14 text-3xl leading-snug dark:bg-zinc-800 bg-zinc-50">
          <img src={image} className=" float-end ml-3 w-40 rounded-lg" alt="" srcset="" />
    <p className=" text-zinc-900 dark:text-zinc-400 text-justify">
      I'm James Onyekachi Great, a creative and ambitious individual with a passion for storytelling and visual expression. As a recent graduate (Class of 2023) and current serving corps member, I'm dedicated to making a positive impact in my community and beyond With a strong foundation in video editing, photography, and graphic design, I'm equipped to bring ideas to life through captivating visuals and compelling narratives. My certification in social media management enables me to effectively communicate messages, engage audiences, and build online communities. As a creative professional, I'm constantly seeking opportunities to grow, learn, and innovate. I'm fascinated by the intersection of art and technology and enjoy exploring new tools and techniques to stay ahead of the curve. My goal is to inspire and educate through my work, whether it's a short film, a photograph, or a social media campaign. When I'm not serving or creating, you can find me reading, learning new skills, or connecting with like-minded individuals. I believe in the power of collaboration and community and am always looking for opportunities to collaborate with fellow creatives and entrepreneurs. Feel free to explore my work, connect with me on social media, or reach out to me directly to discuss potential projects or collaborations. I'm excited to see what the future holds and look forward to making a positive impact in the world through my work!
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
