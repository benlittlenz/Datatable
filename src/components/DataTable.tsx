import React from "react";

import Column from "./Column";
import HeadRow from "./HeaderRow";
import Table from "./Table";
import Body from "./TableBody";
import Head from "./TableHeader";
import { TableProps } from "./types";

function DataTable<T>({ columns }: TableProps<T>): JSX.Element {
  return (
    <div>
      <Table role="table">
        <Head role="rowgroup">
          <HeadRow role="row">
            {columns.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </HeadRow>
        </Head>
        <Body role="rowgroup"></Body>
      </Table>
    </div>
  );
}

export default DataTable;
