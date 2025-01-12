import HomeLayout from "../Layout/HomeLayout";
import mainImage from "../assets/image/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../constants/celebritiesData";




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
                {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                    {...celebrity}
                                                                    key={celebrity.slideNumber}
                                                                    totalSlides={celebrities.length} />))}
                   
                </div>

            </div>
        </HomeLayout>
    )
};
                            
                            

export default AboutUs;