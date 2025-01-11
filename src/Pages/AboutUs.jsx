import HomeLayout from "../Layout/HomeLayout";
import mainImage from "../assets/image/aboutMainImage.png"
import apj from "../assets/image/apj.png";
import einstine from "../assets/image/einstine.png";
import nelson from "../assets/image/nelson.png"
import bill from "../assets/image/bill.png";
import steve from "../assets/image/steve.png";
import mark from "../assets/image/mark.png";




function AboutUs() {
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">Affodable and Quality Education</h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide Affordable and Quality Education to the World.
                            We are providing the Platform to the aspiring Teachers and Students to share their Skills, Creativity and Knowledge to each-other to empower and contribute in the growth of the manKind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img src={mainImage} alt="main_Image" />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto my-16">
                    <div id="slide1" className="carousel-item relative w-full">
                      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can change the world"}
                        </p>
                        <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>

                      </div>
                    </div>
                            
                    <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={einstine} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can change the world"}
                        </p>
                        <h3 className="text-2xl font-semibold">Albert Einstine</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>

                      </div>
                    </div>
                            
                            
                    <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={nelson} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can change the world"}
                        </p>
                        <h3 className="text-2xl font-semibold">Nelson Mondala</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>

                      </div>
                    </div>
                            
                            
                    <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={bill} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can change the world"}
                        </p>
                        <h3 className="text-2xl font-semibold">Bill Gates</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>

                      </div>
                    </div>
                            
                            
                    <div id="slide5" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={steve} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can change the world"}
                        </p>
                        <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>

                      </div>
                    </div>
                            
                            
                    <div id="slide6" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={mark} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                            {"Education is the most powerfull tool you can change the world"}
                        </p>
                        <h3 className="text-2xl font-semibold">Mark Zuckerberg</h3>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>

                      </div>
                    </div>
                            
                            
                </div>

            </div>
        </HomeLayout>
    )
};

export default AboutUs;