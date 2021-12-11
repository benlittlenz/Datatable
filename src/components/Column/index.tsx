import styled from "styled-components";

import { TableColumnProps } from "../types";

const ColumnStyled = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

function TableColumn({ column }: TableColumnProps): JSX.Element {
  return <ColumnStyled>{column.name}</ColumnStyled>;
}

export default TableColumn;
