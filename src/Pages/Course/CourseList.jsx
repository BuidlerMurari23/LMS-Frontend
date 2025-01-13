import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/courseSlice.js";
import HomeLayout from "../../Layout/HomeLayout.jsx";
import CourseCard from "../../Components/CourseCard.jsx";


function CourseList(){

    const dispatch = useDispatch();
    const {courseData} = useSelector((state) => state.course);


    async function loadingCourses() {
        await dispatch(getAllCourses())
    }

    useEffect(() => {
        loadingCourses();
    }, []);
    return(
       <HomeLayout>
        <div className="min-h-[90%] pt-12 pl-20 flex flex-col gap-10 text-white">
            <h1 className="text-3xl text-center font-semibold mb-5">
                Explore the Courses made by <span className="font-bold text-yellow-500">Industry Experts</span>
            </h1>
            <div className="mb-10 flex flex-wrap gap-14">
                    {courseData?.map((element) => {
                        <CourseCard key={element._id}
                                    data={element} />
                    })}
            </div>
            
        </div>
       </HomeLayout>
    )
};


export default CourseList;

