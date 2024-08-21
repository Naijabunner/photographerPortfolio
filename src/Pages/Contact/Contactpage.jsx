import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaPhone } from "react-icons/fa";
import { SiWhatsapp, SiTiktok, SiInstagram, SiDiscord, SiX, SiGmail, SiLinkedin} from "react-icons/si";

 const ContactUs = () => {
  return (
    <div className="min-h-screen dark:bg-zinc-900 px-4 py-12 pt-20 text-zinc-50">
      <h2 className="text-3xl font-mono first-letter:text-4xl mt-5 ml-10 font-semibold text-center flex justify-center items-center text-zinc-800 dark:text-white">
          REACH OUT TO ME
        </h2>
        <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto mt-5 grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >      
      
        <SocialsBlock />
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
const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiDiscord />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
         href="https://wa.link/gbyd8c"
         target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiWhatsapp />
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
      className="col-span-6 bg-pink-500 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/greq__t?igsh=MWdrMzc0MW5rYTBkcg== "
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-300 md:col-span-3"
    >
      <a
        href="mailto:jameskachi209@gmail.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGmail />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-orange-500  md:col-span-3"
    >
      <a
        href="tel:+2347087442440"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaPhone />
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
const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-2xl text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className=" text-red-600 dark:text-red-300 hover:underline">
          @Okechukwudaniel
        </a>
      </p>
    </footer>
  );
};
export default ContactUs;
