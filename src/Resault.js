import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Resault.css";
//import { Audio } from "react-loader-spinner";

export default function Resault(props) {
  //console.log(props);
  if (props.resault) {
    return (
      <div className="Resault">
        <section>
          <h1>{props.resault.word}</h1>
          {props.resault.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.resault.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
