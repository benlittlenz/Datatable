import React from "react";

import Table from "./Table";
// import Body from "./TableBody";

function DataTable() {
  return (
    <div>
      <Table role="table">
        Main table body here.
        {/* <Body role="row-group">
          Ro
        </Body> */}
      </Table>
    </div>
  );
}

export default DataTable;
