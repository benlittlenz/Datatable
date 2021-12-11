import React from "react";

import DataTable from "./components/DataTable";

const columns = [
  {
    id: 0,
    name: "Title A",
    selector: (row: any) => row.title,
  },
  {
    id: 1,
    name: "Year",
    selector: (row: any) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

function App() {
  return (
    <div className="App">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
