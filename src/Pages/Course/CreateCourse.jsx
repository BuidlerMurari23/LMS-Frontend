import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/courseSlice.js";
import HomeLayout from "../../Layout/HomeLayout.jsx";
import { AiOutlineArrowLeft } from "react-icons/ai";


function CreateCourse(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        description: "",
        category: "",
        thumbnail: null,
        createdBy: "",
        previewImage: ""
    });

    function handleImageUpload(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function (){
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    };

    function handleUserInput(e){
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    };

    async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy || !userInput.previewImage){
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if(response?.payload?.success){
            setUserInput({
                title: "",
                description: "",
                category: "",
                thumbnail: null,
                createdBy: "",
                previewImage: ""
            })
            navigate("/courses");
        }
    }


    return(
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh]">
            <form onSubmit={onFormSubmit} noValidate
                  className="flex flex-col justify-center gap-5 rounded-lg text-white p-4 w-[700px] my-10 shadow-[0_0_10px_black] relative"
                   >
                <Link className="absolute top-8 text-2xl text-accent link cursor-pointer">
                    <AiOutlineArrowLeft />
                </Link>

                <h1 className="font-bold text-center text-2xl">
                    Create New Course
                </h1>

                <main className="grid grid-cols-2 gap-x-10">
                    <div className="gap-y-6">
                        <div>
                            <label htmlFor="image_uploads" className="cursor-pointer">
                                {
                                    userInput.previewImage ? (
                                        <img src={userInput.previewImage} 
                                        className="w-full h-44 m-auto border" />
                                    ):(
                                        <div className="w-full h-44 m-auto flex items-center justify-center border">
                                            <h1 className="font-bold text-lg">Upload Your Course Thumbnail</h1>
                                        </div>
                                    )
                                }
                            </label>
                            <input type="file" className="hidden"
                                   id="image_uploads"
                                   name="image_uploads"
                                   accept=".jpg, .jpeg, .png, .webp"
                                   onChange={handleImageUpload} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="title" className="text-lg font-semibold">Course Title</label>
                            <input type="text" required
                                   id="title"
                                   name="title"
                                   placeholder="Enter Course Title"
                                   className="bg-transparent px-2 py-1 border"
                                   value={userInput.title}
                                   onChange={handleUserInput}  />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="createdBy" className="text-lg font-semibold">Course Instructor</label>
                            <input type="text" required
                                   id="createdBy"
                                   name="createdBy"
                                   placeholder="Enter Course Category"
                                   className="bg-transparent px-2 py-1 border"
                                   value={userInput.createdBy}
                                   onChange={handleUserInput}  />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category" className="text-lg font-semibold">Course Category</label>
                            <input type="text" required
                                   id="category"
                                   name="category"
                                   placeholder="Enter Course Category"
                                   className="bg-transparent px-2 py-1 border"
                                   value={userInput.category}
                                   onChange={handleUserInput}  />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="description" className="text-lg font-semibold">Course Description</label>
                            <textarea type="text" required
                                   id="description"
                                   name="description"
                                   placeholder="Enter Course Description"
                                   className="bg-transparent px-2 py-1 border h-24 overflow-y-scroll resize-none "
                                   value={userInput.description}
                                   onChange={handleUserInput}  />
                        </div>
                    </div>
                </main>
                <button type="submit" className="w-full font-semibold text-lg cursor-pointer flex items-center justify-center py-2 rounded-lg bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                    Submit
                </button>
            </form>

            </div>
        </HomeLayout>
    )
        

}

export default CreateCourse;