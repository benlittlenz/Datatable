import React from "react";
import styled from "styled-components";
import { CellBase } from "../Cell";
// import Checkbox from "../ColumnCheckbox/Checkbox";

const TableCellCheckboxStyle = styled(CellBase)`
  flex: 0 0 48px;
  min-width: 48px;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
`;

type TableCellCheckboxProps = {
  name: string;
};

function TableCellCheckbox({ name }: TableCellCheckboxProps): JSX.Element {
  return (
    <TableCellCheckboxStyle
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      className="rdt_TableCell"
      noPadding
    >
      <input type="checkbox" name={name} aria-label={name} />
    </TableCellCheckboxStyle>
  );
}

export default TableCellCheckbox;
