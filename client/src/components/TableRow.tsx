import React from "react";
import { TableRow, TableCell, TableBody } from "@mui/material";
import { ISuperhero } from "./interfaces";

interface SuperheroTableRowProps {
  data: ISuperhero[];
  page: number;
  rowsPerPage: number;
}

const TableRows: React.FC<SuperheroTableRowProps> = ({
  data,
  page,
  rowsPerPage,
}) => {
  const formatValue = (value: number | string) => value === 0 ? '' : value;

  return (
    <TableBody sx={{ width: "100%" }}>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((superhero) => {
          const textColor = superhero.badOrGood === "good" ? 'green' : 'red';
          return (
            <TableRow  key={superhero.name} >
              <TableCell align="center" sx={{color: textColor}}>{superhero.name}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>{formatValue(superhero.intelligence)}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>{formatValue(superhero.strength)}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>{formatValue(superhero.speed)}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>{formatValue(superhero.durability)}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>{formatValue(superhero.power)}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>{formatValue(superhero.combat)}</TableCell>
              <TableCell align="center" sx={{color: textColor}}>
                <img
                  src={superhero.img}
                  alt="superhero"
                  style={{ margin: "auto" }}
                  width={50}
                  height={50}
                />
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default TableRows;
