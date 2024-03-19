const PortfolioPage = () => {
    return (  <>
     <nav className="absolute left-5 top-5 flex justify-between bg-none w-[90%]">
            <a href="/"> <h1 className=" text-5xl font-bold">JO</h1></a>
          
            <div className="navLinks text-3xl font-medium md:flex justify-center items-center  hidden">
                <a href="/"><p className="mx-5">Home</p></a>
                <a href="/portfolio"> <p className="mx-5">Portfolio</p></a>
               <a href="/contact"><p className="mx-5">Contact Me</p></a>
                
            </div>
            <p className="block md:hidden"> bars</p>
        </nav>

    </>);
}
 
export default PortfolioPage;