// const filterResults = (data, query) => {
//     if (!data.product || !data.project || !data.metro) return [];
  
//     return data.product
//       .map((product) => {
//         const project = data.project.find((p) => p.ProjectGroupID === product.ProjectGroupID) || {};
//         const metro = data.metro.find((m) => m.MetroAreaID === project.MetroAreaID) || {};

//         console.log("Product:", product);
//   console.log("Resolved Project:", project);
//   console.log("Resolved Metro:", metro);
  
//         return {
//           ProductName: product.ProductName || "N/A",
//           ProductID: product.ProductID || "N/A",
//           MetroAreaTitle: metro.MetroAreaTitle || "N/A",
//           FullName: project.FullName || "N/A",
//           ProjectGroupID: product.ProjectGroupID || "N/A",
//         };
//       })
//       .filter(
//         (item) =>
//           (item.ProductName || "").toLowerCase().includes(query) ||
//           (item.ProductID || "").toLowerCase().includes(query) ||
//           (item.MetroAreaTitle || "").toLowerCase().includes(query) ||
//           (item.FullName || "").toLowerCase().includes(query) ||
//           (item.ProjectGroupID || "").toString().toLowerCase().includes(query)
//       )
//       .sort((a, b) => (a.ProductName || "").localeCompare(b.ProductName || ""));
//   };
  

  
//   export default filterResults;
  

const filterResults = (data, query) => {
  if (!data || !Array.isArray(data)) {
    console.error("Invalid data passed to filterResults. Expected an array.");
    return [];
  }

  const filteredResults = data.filter((item) =>
    Object.values(item)
      .map((value) => (value || "").toString().toLowerCase())
      .some((field) => field.includes(query))
  );

  return filteredResults.sort((a, b) => (a.ProductName || "").localeCompare(b.ProductName || ""));
};

export default filterResults;
