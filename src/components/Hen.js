import React from "react";

const Hen = ({ n, setN }) => {
  const handleChange = e => setN({ value: e.target.value });

  return (
    <div className="select-n">
      <label>For n =</label>
      <input
        type="text"
        name="select-n"
        id="select-n"
        value={n.value}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default Hen;
