import { createSlice, nanoid } from "@reduxjs/toolkit";
//import the required types
export type Url = {
  id: string;
  longUrl: string;
  shortUrl: string;
};
const initialState: { urls: Url[] } = {
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
    removeUrl: (state, action) => {
      const { id } = action.payload;
      state.urls = state.urls.filter((url) => url.id !== id);
    },
  },
});

export const { addUrl } = urlSlice.actions;

export default urlSlice.reducer;
