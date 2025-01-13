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
