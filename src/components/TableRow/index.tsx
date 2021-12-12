import styled from "styled-components";
import { prop } from "../../utils";
import { TableRow } from "../types";

import TableCell from "../TableCell";

const TableRowStyle = styled.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  width: 100%;
  box-sizing: border-box;
`;

type TableRowProps<T> = {
  columns: any;
  id: string | number;
  rowIndex: number;
  keyField?: string;
  row: T;
};

function Row<T>({
  columns = [],
  id,
  rowIndex,
  keyField = "id",
  row,
}: TableRowProps<T>): JSX.Element {
  const rowKeyField = prop(row as TableRow, keyField);
  return (
    <TableRowStyle id={`row-${id}`} role="row">
      {columns.map((column: any) => {
        console.log("COLUMN >>> ", column);
        return (
          <TableCell
            id={`cell-${column.id}-${rowKeyField}`}
            key={`cell-${column.id}-${rowKeyField}`}
            rowIndex={rowIndex}
            dataTag={column.ignoreRowClick || column.button ? null : ""}
            column={column}
            row={row}
          />
        );
      })}
    </TableRowStyle>
  );
}

export default Row;
