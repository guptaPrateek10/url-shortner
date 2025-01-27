import { useState } from "react";
import { addUrl, Url } from "./store/urlSlice.js";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [longUrl, setUrl] = useState<string>("");
  const dispatch = useDispatch();
  //getting the value from store
  const urlList = useSelector(
    (state: { urls: { urls: Url[] } }) => state.urls.urls
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longUrl.trim() && longUrl.trim().length > 0) {
      dispatch(addUrl({ longUrl }));
      setUrl("");
    }
  };
  // console.log("store data", urls);
  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <label>Url</label>
        <input
          type="text"
          name="url"
          value={longUrl}
          placeholder="Enter Url"
          onChange={handleChange}
        />
        <button type="submit">Short Url</button>
      </form>
      {urlList &&
        Array.isArray(urlList) &&
        urlList.map((url) => {
          return (
            <div key={url.id} className="flex">
              <h4 className="flex-1">Long URL: {url.longUrl}</h4>
              <h3 className="flex-1">Short URL: {url.shortUrl}</h3>
              <a
                href={url.longUrl}
                className="flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Short URL
              </a>
              <hr />
            </div>
          );
        })}
    </>
  );
}

export default App;
