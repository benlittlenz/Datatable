import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

export const defaultProps = {
  columns: [],
  data: [],
  title: "",
  keyField: "id",
  pagination: false,
  paginationDefaultPage: 1,
  paginationResetDefaultPage: false,
  paginationTotalRows: 0,
  paginationPerPage: 10,
  paginationRowsPerPageOptions: [10, 15, 20, 25, 30],
  paginationComponent: null,
  paginationComponentOptions: {},
  paginationIconFirstPage: <ChevronDoubleLeftIcon style={{ height: "8px", width: "8px" }} />,
  paginationIconLastPage: <ChevronDoubleRightIcon style={{ height: "8px", width: "8px" }} />,
  paginationIconNext: <ChevronLeftIcon style={{ height: "8px", width: "8px" }} />,
  paginationIconPrevious: <ChevronRightIcon style={{ height: "8px", width: "8px" }} />,
};
