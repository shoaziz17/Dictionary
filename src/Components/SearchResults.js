import React from "react";
import "../Components/SearchResults.css";
import { HiSpeakerWave, HiOutlineStar } from "react-icons/hi2";

function SearchResults({ result }) {
  console.log(result);

  const playAudio = () => {
    try {
      let audio = new Audio(result.phonetics[0].audio);
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-container">
      <div className="top">
        <span>
          <h2>{result.word}</h2>
          <p>[{result.phonetic}]</p>
          <button onClick={playAudio}>
            <HiSpeakerWave className="voice" />
          </button>
          <button>
            <HiOutlineStar className="star" />
          </button>
        </span>
      </div>
      <br />
      <hr />
      <br />
      <div className="nounDef">
        <b>
          <i>{result.meanings[0].partOfSpeech}</i>
        </b>
        <p>
          {result.meanings[0].definitions.slice(0, 2).map((def, index) => {
            return (
              <div className="defs">
                <p key={index}>
                  {index + 1}. {def.definition.toLowerCase()}
                </p>
                <br />
              </div>
            );
          })}
        </p>
      </div>

      <div className="verbDef">
        <b>
          <i>{result.meanings[1].partOfSpeech}</i>
        </b>
        <p>
          {result.meanings[1].definitions.slice(0, 2).map((def, index) => {
            return (
              <div className="defs">
                <p key={index}>
                  {index + 1}. {def.definition.toLowerCase()}
                </p>
                <br />
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default SearchResults;
