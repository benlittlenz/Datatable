import { TableColumn } from "../components/types";

type ColumnsHook<T> = {
  tableColumns: TableColumn<T>[];
};

function useColumns<T>(columns: TableColumn<T>[]): ColumnsHook<T> {
  return {
    tableColumns: decorateColumns(columns),
  };
}

export default useColumns;

// Make sure columns have unique id's
export function decorateColumns<T>(columns: TableColumn<T>[]): TableColumn<T>[] {
  return columns.map((column, index) => {
    const decoratedColumn: TableColumn<T> = {
      ...column,
    };

    if (!column.id) {
      decoratedColumn.id = index + 1;

      return decoratedColumn;
    }

    return decoratedColumn;
  });
}
