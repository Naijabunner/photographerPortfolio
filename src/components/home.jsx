import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SiLinkedin, SiTiktok, SiX, SiWhatsapp } from "react-icons/si";
import image from "/Logo.png"

export const HomeGrid = () => {
  return (
    <div className="min-h-screen dark:bg-zinc-900 px-4 py-12 pt-24 text-zinc-800 dark:text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <GalleryBlock />
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

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 bg-zinc-50 dark:bg-zinc-800">
    <img
      src={image}
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-3xl md:text-5xl font-medium leading-tight">
      Hi, I'm James Onyekachi.{" "}
      <span className="text-zinc-600">
      And am showing you the world, through my lens

      </span>
    </h1>
    <a
      href="/contact"
      className="flex items-center gap-1 text-xl md:text-2xl dark:text-red-300 text-red-600  hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="https://wa.link/gbyd8c"
        target="blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiWhatsapp />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-slate-500 md:col-span-3"
    >
      <a
        href="https://x.com/MiseGreat?t=W5vymVxmCUeaj_i6FJQ6VQ&s=08"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className='col-span-12 text-xl md:text-3xl leading-snug bg-zinc-50 dark:bg-zinc-800'>
    <p>
      My passion is building cool stuff.{" "}
      <span className='text-zinc-600 dark:text-zinc-400'>
        A creative and ambitious individual with a passion for storytelling and
        visual expression. As a recent graduate (Class of 2023) and current
        serving corps member, I'm dedicated to making a positive impact in my
        community and beyond With a strong foundation in video editing,
        photography....
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 bg-zinc-50 dark:bg-zinc-800">
    <FiMapPin className="text-xl md:text-3xl" />
    <p className="text-center text-2xl text-zinc-600">Lagos, Nigeria</p>
  </Block>
);

const GalleryBlock = () => (
  <Block className="col-span-12 md:col-span-9 md:flex justify-between align-middle text-2xl md:text-4xl bg-zinc-50 dark:bg-zinc-800">
    <p> Take a look at some my work....</p>
    <h2 className=" hover:cursor-pointer hover:text-red-300 hover:underline text-xl md:text-2xl">
      <a href="/gallery">
      My Gallery
      </a>
        <FiArrowRight />
    </h2>
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-lg md:text-2xl text-zinc-600">
        Made with ❤️ by{" "}
        <a href="#" className="dark:text-red-300 text-red-600  hover:underline">
          @Okechukwudaniel
        </a>
      </p>
    </footer>
  );
};