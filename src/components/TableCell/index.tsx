import * as React from "react";
import styled from "styled-components";
import { TableColumn, Selector, Format } from "../types";

const CellStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  line-height: normal;
`;

interface CellProps<T> {
  id: string;
  dataTag: string | null;
  column: TableColumn<T>;
  row: T;
  rowIndex: number;
}

function Cell<T>({ id, column, rowIndex, dataTag, row }: CellProps<T>): JSX.Element {
  console.log("CELL ", column, row);
  console.log("dataTag", dataTag);
  return (
    <CellStyle id={id} data-column-id={column.id} role="gridcell">
      {!column.cell && (
        <div data-tag={dataTag}>{getProperty(row, column.selector, column.format, rowIndex)}</div>
      )}
      {/* {column.cell && column.cell(row, column, id)} */}
    </CellStyle>
  );
}

export default React.memo(Cell) as typeof Cell;

export function getProperty<T>(
  row: T,
  // TODO: remove string type in V8
  selector: Selector<T> | string | undefined | null | unknown, // unknown allows us to throw an error for JS code
  format: Format<T> | undefined | null,
  rowIndex: number
): React.ReactNode {
  if (!selector) {
    return null;
  }

  // TODO: remove  string check in V8
  if (typeof selector !== "string" && typeof selector !== "function") {
    throw new Error(
      "selector must be a . delimited string eg (my.property) or function (e.g. row => row.field"
    );
  }

  // format will override how the selector is displayed but the original dataset is used for sorting
  if (format && typeof format === "function") {
    return format(row, rowIndex);
  }

  if (selector && typeof selector === "function") {
    return selector(row, rowIndex);
  }

  // TODO: Remove in V8
  return parseSelector(row, selector);
}

export function parseSelector<T extends Record<string, any>>(row: T, selector: string): T {
  return selector.split(".").reduce((acc, part) => {
    const arr = part.match(/[^\]\\[.]+/g);
    if (arr && arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        return acc[arr[i]][arr[i + 1]];
      }
    }

    return acc[part];
  }, row);
}
