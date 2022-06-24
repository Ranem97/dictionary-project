import React, { useState } from "react";
import Resault from "./Resault";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [resaults, setResaults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResaults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001cfc1bc4e6d6246b0849f19554969c554";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What are you looking for?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Enter a Word..."
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">Suggested Words: sunset, yoga, plant...</div>
      </section>
      <Resault resault={resaults} />
      <Photos photos={photos} />
    </div>
  );
}
