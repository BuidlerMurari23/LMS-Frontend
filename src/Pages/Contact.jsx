import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout.jsx";
import toast from "react-hot-toast";
import { isValidEmail } from "../Helpers/regexMatcher.js";
import axiosInstance from "../Helpers/axiosInstance.js";


function Contact(){


     const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        // console.log(name, value);
        setUserInput({
            ...userInput,
            [name]: value
        })
    };

    async function onFormSubmit(e) {
        e.preventDefault();
        if(!userInput.name || !userInput.email || !userInput.message){
            toast.error("All fields are mandatory ..!!")
            return;
        };

        if(!isValidEmail(userInput.email)){
            toast.error("Please enter valid email ..!!");
            return;
        }

        try {
            const response = axiosInstance.post("/contact", userInput);
            // console.log(response)
            toast.promise(response, {
                loading: "Submitting your message",
                success: "Form submitted successfully",
                error: "Failed to submit message"
            });
            const contactResponse = await response;
            // console.log(contactResponse)
            if(contactResponse?.data?.success){
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                })
            };

        } catch (e) {
            toast.error(e?.data?.message)
        }
    }

    return(
        <HomeLayout>
                <div className="flex items-center justify-center h-[90vh]">
        <form 
            onSubmit={onFormSubmit}
            noValidate
            className="flex flex-col items-center justify-center gap-2 p-5 text-white rounded-md shadow-[0_0_10px_black] w-[22rem]">
            <h1 className="font-bold text-3xl">Contact Form</h1>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="text-xl font-semibold">Name</label>
                <input type="text" placeholder="Enter your name..."
                       className="bg-transparent px-2 py-1 border rounded-sm"
                       id="name"
                       name="name"
                       onChange={handleInputChange}
                       value={userInput.name} />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="email" className="text-xl font-semibold">Email</label>
                <input type="email" placeholder="Enter your email..."
                       className="bg-transparent px-2 py-1 border rounded-sm"
                       id="email"
                       name="email"
                       onChange={handleInputChange}
                       value={userInput.email} />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="message" className="text-xl font-semibold">message</label>
                <textarea placeholder="Enter your message..."
                       className="bg-transparent px-2 py-1 border rounded-sm resize-none h-40"
                       id="message"
                       name="message"
                       onChange={handleInputChange}
                       value={userInput.message} />
            </div>
            <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 text-lg font-semibold py-1 px-2 rounded-full cursor-pointer">
                Submit
            </button>
        </form>
        </div>
            </HomeLayout>
    )
}

   
export default Contact;