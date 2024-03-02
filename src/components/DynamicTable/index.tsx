import React from "react";
import { useTable, useGlobalFilter, usePagination, Column } from 'react-table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TableContainer } from "./styles";

interface TableProps {
  columns: Column[];
  data: any[];
}



export const DynamicTable: React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 } as any,
    },
    useGlobalFilter,
    usePagination
  ) as any; 

  const pageCount = Math.ceil(data.length / pageSize);

  return (
    <TableContainer>
      <div className="box" {...getTableProps()}>
        <table>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps()}>
                    <div className="container-th">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any, i: number) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td key={cell.column.id} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container-pagination">
        <button className="buttons" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon={faAngleDoubleLeft as IconProp} />
        </button>{" "}
        <button className="buttons" onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FontAwesomeIcon icon={faAngleLeft as IconProp} />
        </button>{" "}
        <button className="buttons" onClick={() => nextPage()} disabled={!canNextPage}>
          <FontAwesomeIcon icon={faAngleRight as IconProp} />
        </button>{" "}
        <button className="buttons" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <FontAwesomeIcon icon={faAngleDoubleRight as IconProp} />
        </button>{" "}
        <span className="page-text">
          Página <strong>{pageIndex + 1}</strong> de <strong>{pageCount}</strong>{" "}
        </span>
        <span className="input-page-text">
          | Ir para página:{" "}
          <input
            className="input-page"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
      </div>
    </TableContainer>
  );
};
