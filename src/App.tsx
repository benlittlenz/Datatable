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
  {
    id: 2,
    name: "Age",
    selector: (row: any) => row.age,
  },
];

const data = [
  {
    id: 0,
    title: "Test A",
    year: "1988",
    age: 27,
  },
  {
    id: 1,
    title: "Test B",
    year: "1984",
    age: 56,
  },
  {
    id: 2,
    title: "Test C",
    year: "1984",
    age: 56,
  },
  {
    id: 3,
    title: "Test D",
    year: "1984",
    age: 56,
  },
  {
    id: 4,
    title: "Test E",
    year: "1984",
    age: 56,
  },
  {
    id: 5,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 6,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 7,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 8,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 9,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 10,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 11,
    title: "Test F",
    year: "1984",
    age: 56,
  },
  {
    id: 12,
    title: "Test F",
    year: "1984",
    age: 56,
  },
];

function App() {
  return (
    <div className="App">
      <DataTable columns={columns} data={data} pagination selectableRows />
    </div>
  );
}

export default App;
