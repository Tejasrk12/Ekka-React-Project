import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBannerData = createAsyncThunk(
    "ekka/fetchBannerData",
    async () => {
        const res = await fetch("http://192.168.0.171:3001/banner");
        const result = await res.json();
        console.log("inside bannerFetchFunction !!!!!");
        console.log(result);
        return result;
    }
)

const initialState = {
    BannerData: null
}
const Slice = createSlice({
    name: "bannerDataSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBannerData.fulfilled, (state, action) => {
            state.BannerData = action.payload;
        })
    }
})

export default Slice.reducer;