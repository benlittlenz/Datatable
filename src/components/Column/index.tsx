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

const ColumnText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function TableCol<T>({ column }: TableColProps<T>): JSX.Element | null {
  return (
    <ColumnStyled data-column-id={column.id}>
      {typeof column.name === "string" ? (
        <ColumnText title={column.name} data-column-id={column.id}>
          {column.name}
        </ColumnText>
      ) : (
        column.name
      )}
    </ColumnStyled>
  );
}

export default TableCol;
