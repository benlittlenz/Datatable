export type Primitive = string | number | boolean | bigint;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export type Format<T> = (row: T, rowIndex: number) => React.ReactNode;
export type TableRow = Record<string, unknown>;

export type PaginationChangePage = (page: number, totalRows: number) => void;
export type PaginationChangeRowsPerPage = (currentRowsPerPage: number, currentPage: number) => void;
export type PaginationComponentProps = {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: PaginationChangePage;
  onChangeRowsPerPage: PaginationChangeRowsPerPage;
};
export type PaginationComponent = React.ComponentType<PaginationComponentProps>;

export type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  keyField?: string;
  pagination?: boolean;
  paginationComponent?: PaginationComponent;
  paginationComponentOptions?: PaginationOptions;
  paginationDefaultPage?: number;
  paginationIconFirstPage?: React.ReactNode;
  paginationIconLastPage?: React.ReactNode;
  paginationIconNext?: React.ReactNode;
  paginationIconPrevious?: React.ReactNode;
  paginationPerPage?: number;
  paginationResetDefaultPage?: boolean;
  paginationRowsPerPageOptions?: number[];
  paginationTotalRows?: number;
};

export type TableColumnBase = {
  allowOverflow?: boolean;
  button?: boolean;
  center?: boolean;
  compact?: boolean;
  reorder?: boolean;
  grow?: number;
  id?: string | number;
  ignoreRowClick?: boolean;
  maxWidth?: string;
  minWidth?: string;
  name?: string | number | React.ReactNode;
  omit?: boolean;
  right?: boolean;
  sortable?: boolean;
  width?: string;
  wrap?: boolean;
};

export interface TableColumn<T> extends TableColumnBase {
  id?: string | number;
  name?: string | number | React.ReactNode;
  cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
  format?: Format<T> | undefined;
  selector?: Selector<T>;
}

export interface PaginationOptions {
  noRowsPerPage?: boolean;
  rowsPerPageText?: string;
  rangeSeparatorText?: string;
  selectAllRowsItem?: boolean;
  selectAllRowsItemText?: string;
}
