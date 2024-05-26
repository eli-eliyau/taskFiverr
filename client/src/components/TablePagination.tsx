import React from 'react';
import { TablePagination } from '@mui/material';

interface SuperheroTablePaginationProps {
  dataLength: number;
  rowsPerPage: number;
  page: number;
  setPage: (newPage: number) => void;
  setRowsPerPage: (newRowsPerPage: number) => void;
}

const TablePaginations: React.FC<SuperheroTablePaginationProps> = ({
  dataLength,
  rowsPerPage,
  page,
  setPage,
  setRowsPerPage,
}) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 15]}
      component="div"
      count={dataLength}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default TablePaginations;
