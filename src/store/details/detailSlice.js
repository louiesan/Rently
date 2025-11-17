import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: null,
  details: {},
  nearbies: [],
  nearbieStatus: "idle",
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

export const fetchNearbies = createAsyncThunk("fetch/nearbies", async (id) => {
  console.log(id);

  const res = await fetch(
    `https://zoopla.p.rapidapi.com/properties/get-nearby?listing_id=${id}`,
    options
  );
  const data = res.json();

  return data;
});

export const fetchDetail = createAsyncThunk("fetch/detail", async (id) => {
  console.log(id);

  const res = await fetch(
    `https://zoopla.p.rapidapi.com/properties/v2/detail?listingId=${id}`,
    options
  );
  const data = res.json();

  return data;
});

const detailSlice = createSlice({
  name: "details",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.status = "success";
        state.details = action?.payload?.data?.listingDetails;
        state.error = action?.payload?.message;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.status = "rejected";
      });
    builder
      .addCase(fetchNearbies.pending, (state) => {
        state.nearbieStatus = "pending";
      })
      .addCase(fetchNearbies.fulfilled, (state, action) => {
        state.nearbies = action.payload;
        state.nearbieStatus = "success";
      })
      .addCase(fetchNearbies.rejected, (state) => {
        state.nearbies = [];
        state.nearbieStatus = "rejected";
      });
  },
});

export default detailSlice.reducer;
