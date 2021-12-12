export type Primitive = string | number | boolean | bigint;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export type Format<T> = (row: T, rowIndex: number) => React.ReactNode;
export type TableRow = Record<string, unknown>;

export type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  keyField?: string;
};

export type TableColumnBase = {
  id?: string | number;
  name?: string | number | React.ReactNode;
};

export interface TableColumn<T> extends TableColumnBase {
  id?: string | number;
  name?: string | number | React.ReactNode;
  cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
  format?: Format<T> | undefined;
  selector?: Selector<T>;
}

// export type TableColumnProps = {
//   column: TableColumn;
// };
