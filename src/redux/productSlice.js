import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProductData = createAsyncThunk(
    "ekka/fetchProductData",
    async () => {
        const res = await fetch("http://192.168.0.171:3001/product/getProducts");
        const result = await res.json();
        return result;
    }
)

const initialState = {
    ProductData: null
}

const Slice = createSlice({
    name:"productDataSlice",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchProductData.fulfilled, (state,action)=>{
            state.ProductData =action.payload;
        })
    }
})

export default Slice.reducer;