import React, { useState } from "react";
import Resault from "./Resault";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [resaults, setResaults] = useState(null);

  function handleResponse(response) {
    setResaults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
