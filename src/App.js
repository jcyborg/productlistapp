import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultsTable from "./components/ResultsTable";
import filterResults from "./utils/filterResults";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ product: [], project: [], metro: [] });
  const [results, setResults] = useState([]); 

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:5173/api/Products");
        const response = await fetch("https://productlist-hbevezdvgyftadh8.eastus2-01.azurewebsites.net/api/products");
        const result = await response.json();
        console.log("Data received from API:", result);
        setData(result);
        setResults(result); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
//
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
  
    console.log("Current query:", searchQuery);
    console.log("Data before filtering:", data);
  
    const filtered = filterResults(data, searchQuery); 
    setResults(filtered);
  };
  

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Product Search</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for products, projects, or metro areas..."
        value={query}
        onChange={handleSearch}
      />
      <ResultsTable results={results} />
    </div>
  );
};

export default App;
