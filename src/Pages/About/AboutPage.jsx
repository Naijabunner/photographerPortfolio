import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../../Nav";
import { Socials } from "../../Lib/Data";
const Aboutpg = () => {
  const [isvisible, setIsvisible] = useState(false);
  const SocialMediaData =Socials
  const HandleToggle = () => {
    setIsvisible((prev) => !prev);
  };
  return (
    <>
      <section className="h-screen w-screen relative overflow-x-hidden">
                    <Navbar/>
     <main className=" flex flex-col min-h-screen h-fit w-screen  items-start p-10 pt-20 overflow-x-hidden dark:text-white ">
        <h1>
        About Me
        </h1>
        <p className=" text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, exercitationem voluptatibus iste cupiditate enim esse facere iusto doloribus blanditiis vitae hic adipisci! Dolorem accusantium aliquam quos aspernatur! Tenetur sed saepe sapiente consequuntur non. Placeat tempore veniam facere iusto labore reprehenderit, ad aut. Expedita tenetur quae possimus. Fugit minima quam a molestiae placeat harum, minus, iste nulla magni saepe doloremque neque iusto voluptates voluptate dolores incidunt, sed consectetur quisquam asperiores. Illum itaque quae quis quam, excepturi commodi, dolor aliquam, corrupti consequatur in maiores! Dolore aspernatur id quidem voluptatem minus amet vel nobis quo non quibusdam, iste totam temporibus laborum. Quibusdam, nobis!
        </p>
     </main>

         {/* <motion.div
        className=" w-[25vmin] h-[25vmin] fixed bg-gray-500 dark:bg-white opacity-[0.1] z-[1] top-[50%] bottom[50%] left-[40vw] right-[10vw] "
        whileInView={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          
        }}
        transition={{repeat:Infinity, duration:2 }}
      /> */}
    
      </section>

    </>
  );
};

export default Aboutpg;
