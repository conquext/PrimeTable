import React from "react";

const Row = ({ rList, className }) => {
  return (
    <div className={className}>
      {rList.map(rl => (
        <button className="nrow" key={rl}>
          {rl}
        </button>
      ))}
    </div>
  );
};

export default Row;
