import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTestimonialData = createAsyncThunk(
    'ekka/fetchTestimonialData',
    async() =>{
        const res = await fetch("http://192.168.0.171:3001/testimonials");
        const result = await res.json();
        return result;
    }
)

const initialState = {
    TestimonialData: null
}

const Slice = createSlice({
    name: "testimonialDataSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTestimonialData.fulfilled,(state, action)=>{
            state.TestimonialData = action.payload;
        })
    }
})

export default Slice.reducer;