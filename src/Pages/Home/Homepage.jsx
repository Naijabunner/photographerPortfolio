import image from "../../assets/phonepic.jpg"
const Homepg = () => {
    return (  <>
    <section className="flex max-h-screen w-screen relative">
        <div className="bg-white w-0 sm:w-[60vw] flex justify-center items-center">
        <div className="">
                <h2 className="text-[5vw] font-bold">
                    My name is<br />
                    James Onyekachi
                </h2>
                <p className=" text-[2vw] text-center my-5">And am showing you the world through my lens</p>
                <div className="btns flex justify-evenly mt-2">
                    <a href="/portfolio"><button className="Landing_page_btn bg-black text-white font-medium text-[2vw]">
                            Portfolio
                    </button></a>
                    <a href="/contact">
                    <button className="Landing_page_btn bg-gray-300 text-black font-medium text-[2vw] p-10">
                            Contact Me
                    </button></a>
                </div>
            </div>
        </div>
        <div className="img w-[100vw] sm:w-[40vw] max-h-screen min-h-screen flex justify-center items-end">
                    <div className="mb-10 sm:hidden">
                <h2 className="text-[10vw] font-bold text-white">
                    My name is<br />
                    James Onyekachi
                </h2>
                <p className=" text-[4vw] text-center text-white my-5">And am showing you the world through the lens</p>
                <div className="btns flex justify-evenly mt-4 text-white">
                    <a href="/portfolio"><button className="Landing_page_btn bg-white text-black font-medium text-[4vw]">
                            Portfolio
                    </button></a>
                    <a href="/contact">
                    <button className="Landing_page_btn bg-gray-300 text-black font-medium text-[4vw] p-10">
                            Contact Me
                    </button></a>
                </div>
            </div>
        </div>
        <a href="/"> <h1 className="absolute left-5 top-5 text-5xl font-bold text-gray-400">JO</h1></a>
           
    </section>
    </>);
}
 
export default Homepg;