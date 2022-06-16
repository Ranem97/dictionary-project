import React from "react";
import Meaning from "./Meaning";

export default function Resault(props) {
  if (props.resault) {
    return (
      <div className="Resault">
        <h2>{props.resault.word}</h2>
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
