import React from "react";
import Row from "./Row";

const Table = ({ nPrimes }) => {
  let rowMul;

  return (
    <div className="prime-table">
      <Row rList={["", ...nPrimes]} className="odd-row border-bottom" />
      <div>
        {nPrimes.map((list, index) => {
          rowMul = nPrimes.map(np => np * list);
          return (
            <Row
              key={index}
              rList={[list, ...rowMul]}
              className={index % 2 !== 0 ? "odd-row" : "even-row"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
