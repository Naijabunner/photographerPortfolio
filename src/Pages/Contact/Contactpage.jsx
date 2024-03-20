const ContactUs = () => {
    return ( <>
   
    <section className="flex max-h-screen w-screen relative overflow-x-hidden">
    
    <nav className="absolute left-5 top-5 flex justify-between items-center bg-none w-[90%]">
          <a href="/">
            {" "}
            <h1 className=" text-5xl font-bold">JO</h1>
          </a>

          <div className="navLinks text-3xl font-medium md:flex justify-center items-center  hidden">
            <a href="/">
              <p className="mx-5">Home</p>
            </a>
            <a href="/portfolio">
              {" "}
              <p className="mx-5">Portfolio</p>
            </a>
            <a href="/contact">
              <p className="mx-5">Contact Me</p>
            </a>
          </div>
          <p className="block md:hidden"> 
          <svg xmlns="http://www.w3.org/2000/svg" className=' w-7' viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </p>
        </nav>
            <main className=" flex flex-col min-h-screen h-fit w-screen  items-start p-10 pt-40 overflow-x-hidden">
            <h1 className="text-[10vw] font-bold ">
                Write me @
            </h1>
            <a href="" className=" decoration-violet-600 underline text-[3.5vw] text-center w-100%">blahblahbalha@gmail.com</a>
            <h2 className="text-[10vw] font-bold mt-5 pt-2 border-t-2 border-t-black w-screen">
                Call Me
            </h2>
            <a href="" className=" decoration-red-600 underline text-[3.5vw]">34567890-4567</a>
            <p className="text-[7vw] font-bold border-t-2 border-t-black w-screen mt-10">Can also reach out on</p>
            <div className="socialMedia flex flex-wrap justify-evenly items-center">
                <a href="/contact" className="text-[10vmin] p-2 m-2">Instagram </a>
                <a href="/contact" className="text-[10vmin] p-2 m-2">Instagram </a>
                <a href="/contact" className="text-[10vmin] p-2 m-2">Instagram </a>
                <a href="/contact" className="text-[10vmin] p-2 m-2">Instagram </a>
                <a href="/contact" className="text-[10vmin] p-2 m-2">Instagram </a>

              
            </div>
            </main>
    </section>
    </>);

}
 
export default ContactUs;