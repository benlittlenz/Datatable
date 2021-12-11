import React from "react";

import DataTable from "./components/DataTable";

const columns = [
  {
    name: "Title A",
  },
  {
    name: "Title B",
  },
  {
    name: "Title C",
  },
  {
    name: "Title D",
  },
];

function App() {
  return (
    <div className="App">
      <DataTable columns={columns} />
    </div>
  );
}

export default App;
