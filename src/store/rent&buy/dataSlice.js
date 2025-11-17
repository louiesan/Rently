import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  forRent: [],
  forSale: [],
  status: "idle",
  error: null,
};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "07d2b9d2cdmsh762d19f70482447p1f1ef6jsn4ba4e8bd18fe",
    "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
  },
};

// Fetching Rent Property to show it as recommendation
export const fetchRent = createAsyncThunk("fetchRent", async () => {
  const res = await fetch(
    "https://zoopla.p.rapidapi.com/properties/v2/list?locationValue=Oxford%2C%20Oxfordshire&section=to-rent&sortOrder=most_reduced",
    options
  );
  const data = await res.json();
  return data.data.listings.regular;
});
// Fetching Buy Property to show it as recommendation
export const fetchBuy = createAsyncThunk("fetchBuy", async () => {
  const res = await fetch(
    "https://zoopla.p.rapidapi.com/properties/v2/list?locationValue=Oxford%2C%20Oxfordshire&section=for-sale&sortOrder=most_reduced",
    options
  );
  const data = await res.json();
  return data.data.listings.regular;
});

const dataSlice = createSlice({
  name: "dataproperty",
  initialState,
  extraReducers: (builder) => {
    // Using the FetchRent Function
    builder
      .addCase(fetchRent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchRent.fulfilled, (state, action) => {
        console.log(action.payload);
        action.payload.length = 10;
        state.forRent = action.payload;
        state.status = "success";
      })
      .addCase(fetchRent.rejected, (state) => {
        state.error = "Error Occured";
      });
    // Using the FetchBuy Function
    builder
      .addCase(fetchBuy.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchBuy.fulfilled, (state, action) => {
        console.log(action.payload);
        action.payload.length = 10;
        state.forSale = action.payload;
        state.status = "success";
      })
      .addCase(fetchBuy.rejected, (state) => {
        state.status = "rejected";
        state.error = "Error Occured";
      });
  },
});

export default dataSlice.reducer;
