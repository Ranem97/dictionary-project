import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Resault(props) {
  if (props.resault) {
    return (
      <div className="Resault">
        <h1>{props.resault.word}</h1>
        {props.resault.phonetics.map(function (phonetic, index) {
          return <Phonetic phonetic={phonetic} />;
        })}
        {props.resault.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
