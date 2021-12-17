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
  selected: boolean;
  setSelected: (selected: boolean) => void;
};

function TableCellCheckbox({ name, selected, setSelected }: TableCellCheckboxProps): JSX.Element {
  return (
    <TableCellCheckboxStyle onClick={(e: React.MouseEvent) => e.stopPropagation()} noPadding>
      <input
        type="checkbox"
        name={name}
        checked={selected}
        aria-checked={selected}
        onClick={() => setSelected(!selected)}
        aria-label={name}
      />
    </TableCellCheckboxStyle>
  );
}

export default TableCellCheckbox;
