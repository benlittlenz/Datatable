import styled from "styled-components";

import { TableColumn } from "../types";

type TableColProps<T> = {
  column: TableColumn<T>;
};

const ColumnStyled = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

function TableCol<T>({ column }: TableColProps<T>): JSX.Element | null {
  return <ColumnStyled>{column.name}</ColumnStyled>;
}

export default TableCol;
