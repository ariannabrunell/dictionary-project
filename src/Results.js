import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        <a
          href={props.results.phonetics[0].audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
        <br />
        {props.results.phonetics[0].text}
        {props.results.meanings.map(function (meaning, index) {
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
