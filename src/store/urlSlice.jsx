import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  urls: [],
};

const generateShortUrl = () => nanoid(5);

const urlSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    addUrl: (state, action) => {
      const { longUrl } = action.payload;
      state.urls.push({
        id: nanoid(),
        longUrl,
        shortUrl: `https://shorturl.com/${generateShortUrl()}`,
      });
    },
  },
});

export const { addUrl } = urlSlice.actions;

export default urlSlice.reducer;
