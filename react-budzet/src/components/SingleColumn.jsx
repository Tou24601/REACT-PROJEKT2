import React from "react";
import "../reset.css";
import "../App.css";
import Inputs from "./Inputs";

const SingleColumn = ({
  columnName,
  nameInputId,
  nameInputPlaceholder,
  numberInputId,
  numberInputPlaceholder,
  sumName,
  sumId,
}) => {
  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        nameInputId={nameInputId}
        nameInputPlaceholder={nameInputPlaceholder}
        numberInputId={numberInputId}
        numberInputPlaceholder={numberInputPlaceholder}
      />
      <ul className="mt-4" id="unorderedList"></ul>
      <p className="align-text-bottom mt-5 bottomText sums">
        Suma {sumName}:{" "}
        <span className="sum fw-bold" id={sumId}>
          0
        </span>{" "}
        <span className="fw-bold">zł</span>
      </p>
    </div>
  );
};

export default SingleColumn;
