import React from "react";

const Error = ({ error, maxValue }) => {
  return (
    <div className="error">
      {Object.keys(error).map((er, index) => (
        <div key={index}>{error[er]}</div>
      ))}
      {error["nError"] ? (
        <div className="error-adv">Try values below {maxValue}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Error;
