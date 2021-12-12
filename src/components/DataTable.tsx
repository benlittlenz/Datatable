import React, { useState } from "react";

import Column from "./Column";
import Body from "./TableBody";
import Row from "./TableRow";
import HeadRow from "./HeaderRow";
import Table from "./Table";
import Head from "./TableHeader";
import NativePagination from "./Pagination";

import { TableProps, TableRow } from "./types";
import { defaultProps } from "./defaultProps";
import useColumns from "../hooks/useColumns";
import { prop, isEmpty, getNumberOfPages, recalculatePage } from "../utils";

function DataTable<T>(props: TableProps<T>): JSX.Element {
  const {
    data = defaultProps.data,
    columns = defaultProps.columns,
    keyField = defaultProps.keyField,
    pagination = defaultProps.pagination,
    // paginationTotalRows = defaultProps.paginationTotalRows,
    paginationDefaultPage = defaultProps.paginationDefaultPage,
    // paginationResetDefaultPage = defaultProps.paginationResetDefaultPage,
    paginationPerPage = defaultProps.paginationPerPage,
    paginationRowsPerPageOptions = defaultProps.paginationRowsPerPageOptions,
    paginationIconLastPage = defaultProps.paginationIconLastPage,
    paginationIconFirstPage = defaultProps.paginationIconFirstPage,
    paginationIconNext = defaultProps.paginationIconNext,
    paginationIconPrevious = defaultProps.paginationIconPrevious,
    paginationComponentOptions = defaultProps.paginationComponentOptions,
  } = props;

  const [currentPage, setCurrentPage] = useState(paginationDefaultPage);
  const [rowsPerPage, setRowsPerPage] = useState(paginationPerPage);

  const { tableColumns } = useColumns(columns);
  const enabledPagination = pagination && data.length > 0;

  const sortedData = React.useMemo(() => {
    return [...data].sort();
  }, [data]);
  const tableRows = React.useMemo(() => {
    if (pagination) {
      const lastIndex = currentPage * rowsPerPage;
      const firstIndex = lastIndex - rowsPerPage;
      return sortedData.slice(firstIndex, lastIndex);
    }

    return sortedData;
  }, [currentPage, pagination, rowsPerPage, sortedData]);

  const handleChangePage = React.useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleChangeRowsPerPage = React.useCallback(
    (newRowsPerPage: number) => {
      const rowCount = tableRows.length;
      const updatedPage = getNumberOfPages(rowCount, newRowsPerPage);
      const recalculatedPage = recalculatePage(currentPage, updatedPage);

      setCurrentPage(recalculatedPage);
      setRowsPerPage(newRowsPerPage);
    },
    [currentPage, tableRows.length]
  );
  return (
    <>
      <Table role="table">
        <Head role="rowgroup">
          <HeadRow role="row">
            {tableColumns.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </HeadRow>
        </Head>
        <Body role="rowgroup">
          {tableRows.map((row, i) => {
            const key = prop(row as TableRow, keyField) as string | number;
            const id = isEmpty(key) ? i : key;

            return (
              <Row id={id} rowIndex={i} columns={columns} row={row} key={id} keyField={keyField} />
            );
          })}
        </Body>
      </Table>
      {enabledPagination && (
        <div>
          <NativePagination
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            rowCount={sortedData.length}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            // direction="ASC"
            paginationRowsPerPageOptions={paginationRowsPerPageOptions}
            paginationIconLastPage={paginationIconLastPage}
            paginationIconFirstPage={paginationIconFirstPage}
            paginationIconNext={paginationIconNext}
            paginationIconPrevious={paginationIconPrevious}
            paginationComponentOptions={paginationComponentOptions}
          />
        </div>
      )}
    </>
  );
}

export default DataTable;
