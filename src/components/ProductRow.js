import React from "react";

const ProductRow = ({ data }) => {
  const { ProductName, ProductID, MetroAreaTitle, FullName, ProjectGroupID } = data;

  return (
    <tr>
      <td>{ProductName || "N/A"}</td>
      <td>{ProductID || "N/A"}</td>
      <td>{MetroAreaTitle || "N/A"}</td>
      <td>{FullName || "N/A"}</td>
      <td>{ProjectGroupID || "N/A"}</td>
    </tr>
  );
};

export default ProductRow;
