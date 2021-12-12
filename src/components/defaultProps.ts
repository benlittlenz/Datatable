import { paginationIcons } from "./Icons";

export const defaultProps = {
  columns: [],
  data: [],
  title: "",
  keyField: "id",

  // Select rows props
  selectableRows: false,
  selectableRowsComponent: "input" as const,
  selectableRowsComponentProps: {},
  selectableRowDisabled: null,

  // Pagination props
  pagination: false,
  paginationDefaultPage: 1,
  paginationResetDefaultPage: false,
  paginationTotalRows: 0,
  paginationPerPage: 10,
  paginationRowsPerPageOptions: [10, 15, 20, 25, 30],
  paginationComponent: null,
  paginationComponentOptions: {},
  paginationIconFirstPage: paginationIcons.PaginationFirstIcon,
  paginationIconLastPage: paginationIcons.PaginationLastIcon,
  paginationIconNext: paginationIcons.PaginationNextIcon,
  paginationIconPrevious: paginationIcons.PaginationPrevIcon,
  onChangePage: () => null,
  onChangeRowsPerPage: () => null,
};
