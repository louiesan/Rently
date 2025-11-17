import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
  type: "for-sale",
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

// Fetching User Search
export const fetchSearch = createAsyncThunk("fetchSearch", async (obj) => {
  const encodedLocation = encodeURIComponent(`city:${obj.city}`);
  console.log(obj);

  const res = await fetch(
    `https://zoopla.p.rapidapi.com/properties/v2/list?locationValue=${encodedLocation}&locationIdentifier=${obj.city
      .split(",")[0]
      .toLowerCase()}&section=${obj.type}&sortOrder=most_reduced`,
    options
  );
  const data = await res.json();

  return data?.data?.listings?.regular;
});

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        console.log(action.payload);

        state.properties = action.payload ? action.payload : [];
        state.error =
          action.payload && action.payload.length > 0 ? null : "Error Occured";
        state.status = "success";
      })
      .addCase(fetchSearch.rejected, (state) => {
        state.status = "rejected";
      });
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { setType } = searchSlice.actions;
