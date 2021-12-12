import React from "react";

import Column from "./Column";
import Body from "./TableBody";
import Row from "./TableRow";
import HeadRow from "./HeaderRow";
import Table from "./Table";
import Head from "./TableHeader";

import { TableProps, TableRow } from "./types";
import useColumns from "../hooks/useColumns";
import { prop, isEmpty } from "../utils";

function DataTable<T>({ columns, data, keyField }: TableProps<T>): JSX.Element {
  const { tableColumns } = useColumns(columns);
  console.log("COLUMN HOOK", tableColumns);
  const sortedData = React.useMemo(() => {
    return [...data].sort();
  }, [data]);
  const tableRows = React.useMemo(() => {
    // TODO: calculate first and last index
    return sortedData.slice(0, 25);
  }, [sortedData]);
  return (
    <div>
      <Table role="table">
        <Head role="rowgroup">
          <HeadRow role="row">
            {tableColumns.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </HeadRow>
        </Head>
        <Body role="rowgroup">
          {tableRows.map((row, i) => {
            const key = prop(row as TableRow, (keyField = "id")) as string | number;
            const id = isEmpty(key) ? i : key;

            return (
              <Row id={id} rowIndex={i} columns={columns} row={row} key={id} keyField={keyField} />
            );
          })}
        </Body>
      </Table>
    </div>
  );
}

export default DataTable;
