import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
            </p>
            <Example example={definition.example} />
            <br />

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
