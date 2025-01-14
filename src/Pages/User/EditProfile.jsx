import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { useState } from "react";
import toast from "react-hot-toast";
import { getUserData, updateProfile } from "../../Redux/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import {BsPersonCircle} from "react-icons/bs"
import { AiOutlineArrowLeft } from "react-icons/ai";


function EditProfile(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userID: useSelector((state) => state?.auth?.data?._id)
    });

    function handleImageUpload(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function (){
                setUserData({
                    ...userData,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    }

    function handleInputData(e){
        const { name, value } = e.target;
        setUserData({
            userData,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userData.fullName || !userData.avatar){
            toast.error("All fields are mandatory");
            return;
        }
        
        if(userData.fullName.length < 3){
            toast.error("Name cannot be less than 3 Characters.");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", userData.fullName);
        formData.append("avatar", userData.avatar);

        await dispatch(updateProfile([userData.userID, formData]));
        await dispatch(getUserData());
        
        navigate("/user/profile")
    }

    return(
        <HomeLayout>
            <div className="flex items-center justify-center min-h-[90vh]">
                <form onSubmit={onFormSubmit} noValidate
                      className="flex flex-col justify-center gap-5 p-4 text-white w-96 min-h-[26rem] shadow-[0_0_10px_black]" >
                    <h1 className="font-semibold text-2xl text-center">Edit Profile</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {
                            userData?.previewImage ? (
                                <img src={userData.previewImage} 
                                     className="w-28 h-28 rounded-full m-auto" />
                            ):(<BsPersonCircle className="w-28 h-28 rounded-full m-auto" />)
                        }
                    </label>
                    <input type="file"
                           id="image_uploads"
                           name="image_uploads"
                           accept=".jpg, .jpeg, .png, .svg, .webp"
                           onChange={handleImageUpload}  />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName"
                               className="text-lg font-semibold" >Full Name</label>
                        <input type="text" required
                               id="fullName"
                               name="fullName"
                               placeholder="Enter your name"
                               className="bg-transparent px-2 py-1 border"
                               value={userData.fullName}
                               onChange={handleInputData}  />
                    </div>
                    <button type="submit" className="bg-yellow-600 hover:bg-yellow-500 w-full transition-all ease-in-out duration-300 px-2 py-1 rounded-xl text-lg font-semibold cursor-pointer">
                        Update Profile
                    </button>
                    <Link to="/user/profile">
                        <p className="w-full link cursor-pointer text-accent flex items-center justify-center gap-2 ">
                          <AiOutlineArrowLeft />  Go back to Profile
                        </p>
                    </Link>


                </form>

            </div>
        </HomeLayout>
    )
}

export default EditProfile;