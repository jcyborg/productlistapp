import React from "react";

const ResultsTable = ({ results }) => {
  console.log("Results in ResultsTable:", results); // Debugging

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover mt-4">
        <thead className="thead-dark">
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>MetroArea Title</th>
            <th>Full Name</th>
            <th>Project Group ID</th>
          </tr>
        </thead>
        <tbody>
          {results && results.length > 0 ? (
            results.map((item, index) => (
              <tr key={index}>
                <td>{item.productName || "N/A"}</td>
                <td>{item.productID || "N/A"}</td>
                <td>{item.metroAreaTitle || "N/A"}</td>
                <td>{item.fullName || "N/A"}</td>
                <td>{item.projectGroupID || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Result Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
