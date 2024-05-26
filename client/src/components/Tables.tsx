import { useState } from "react";
import { Paper, TableContainer, Table } from "@mui/material";
import TableHeads from "./TableHead";
import TableRows from "./TableRow";
import TablePaginations from "./TablePagination";
import { ISuperhero } from "./interfaces";

interface IProps {
  superheros: ISuperhero[];
  setSuperheros: Function;
}

const Tables: React.FC<IProps> = ({ superheros, setSuperheros }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  console.log(superheros);

  return (
    <Paper>
      {superheros && (
        <>
          <TableContainer>
            <Table stickyHeader>
              <TableHeads data={superheros} setData={setSuperheros} />
              <TableRows
                data={superheros}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </Table>
          </TableContainer>
          <TablePaginations
            dataLength={superheros.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
};

export default Tables;
