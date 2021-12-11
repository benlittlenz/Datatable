import React from "react";

import Column from "./Column";
import HeadRow from "./HeaderRow";
import Table from "./Table";
import Head from "./TableHeader";
import { TableProps, TableColumn } from "./types";

function DataTable({ columns }: TableProps): JSX.Element {
  return (
    <div>
      <Table role="table">
        <Head role="rowgroup">
          <HeadRow role="row">
            {columns.map((column: TableColumn, index) => (
              <Column key={index} column={column} />
            ))}
          </HeadRow>
        </Head>
      </Table>
    </div>
  );
}

export default DataTable;
