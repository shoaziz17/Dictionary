import React, { useState } from "react";
import "../Components/Dictionary.css";
import axios from "axios";
import SearchResults from "./SearchResults";

function Dictionary() {
  const [wordInp, setWordInp] = useState("");
  const [result, setResult] = useState(null);
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${api}/${wordInp}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (err) {
      console.log({ err });
    }
    wordInp.toLowerCase();
  };

  const getWordFromInput = (e) => {
    setWordInp(e.target.value);
  };

  const handleClear = () => {
    setWordInp("");
  };

  return (
    <div className="container">
      <form>
        <h1>Dictionary</h1>
          <input
          type="text"
          placeholder="Enter word..."
          onChange={getWordFromInput}
          value={wordInp}
        />
        <button className="searchBtn" onClick={handleSearch}>Search</button>
        <button className="clearBtn" onClick={handleClear}>Clear</button>
      </form>
      {result && <SearchResults {...{ result }} />}
    </div>
  );
}

export default Dictionary;
