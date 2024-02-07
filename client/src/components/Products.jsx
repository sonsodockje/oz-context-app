import React from "react";

const Products = ({ name, imagePath }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:4000${imagePath}`}
        alt=""
      />
      <form style={{ marginTop: "10x" }}>
        <label style={{ textAlign: "right" }}>{name} product</label>
        <input
          type="number"
          style={{ marginLeft: 7 }}
          defaultValue={0}
          min={0}
          name="quantity"
        />
      </form>
    </div>
  );
};

export default Products;
