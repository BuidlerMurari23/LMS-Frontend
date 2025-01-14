import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance.js";


const initialState = {
    courseData: [],
};

export const getAllCourses = createAsyncThunk("/courses/get", async () => {
    try {
        const response = axiosInstance.get("/courses");
        toast.promise(response, {
            loading: "Loading courses data",
            success: "Courses loaded successfully",
            error: "Failed to load courses data"
        });
        return (await response).data.courses;
    } catch (e) {
        toast.error(e?.response?.data?.message);
    }
});

export const createNewCourse = createAsyncThunk("/courses/create", async (data) => {
    try {
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);
        formData.append("category", data?.category);
        formData.append("thumbnail", data?.thumbnail);
        formData.append("previewImage", data?.previewImage);
        formData.append("createdBy", data?.createdBY);

        const response = axiosInstance.post("/courses", formData);
        toast.promise(response, {
            loading: "Creating new course",
            success: "Course created successfully",
            error: "Failed to create course"
        });

        return (await response).data;
    } catch (e) {
        toast.error(e?.response?.data?.message)
    }
})

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if(action.payload){
                state.courseData = [...action.payload];
            }
        })
    }
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;
