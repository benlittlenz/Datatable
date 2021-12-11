export type TableProps = {
  columns: TableColumn[];
};

export type TableColumn = {
  name?: string | number | React.ReactNode;
};

export type TableColumnProps = {
  column: TableColumn;
};
