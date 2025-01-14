import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { Link } from "react-router-dom";


function Profile(){

    const dispatch = useDispatch()
    const userData = useSelector((state) => state?.auth?.data);



return(
    <HomeLayout>
        <div className="min-h-[90vh] flex items-center justify-center">
            <div className="my-10 w-96 flex flex-col gap-4 rounded-lg p-4 text-white shadow-[0_0_10px_black]">
                <img src={userData?.avatar?.secure_url} alt="Profile"
                     className="w-40 m-auto border border-black rounded-full" />
                <h3 className="text-xl font-semibold capitalize text-center">
                    {userData?.fullName}
                </h3>
                <div className="grid grid-cols-2">
                    <p>Email:</p><p>{userData?.email}</p>
                    <p>Role:</p><p>{userData?.role}</p>
                    <p>Subscription: </p>
                    <p>{userData?.subscription?.status ==="active" ? "Active" : "Inactive"} </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <Link to="/changePassword" className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-lg font-semibold py-2 cursor-pointer text-center">
                        <button>Change Password</button>
                    </Link>
                    <Link to="/editProfile" className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-lg font-semibold py-2 cursor-pointer text-center">
                        <button>Edit Profile</button>
                    </Link>
                </div>
                {
                    userData?.subscription?.status === "active" && (
                        <button className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 py-2 rounded-lg cursor-pointer font-semibold">
                            Cancel Subscription
                        </button>
                    )
                }
                    
                    
            </div>

        </div>
    </HomeLayout>
)
}

export default Profile;