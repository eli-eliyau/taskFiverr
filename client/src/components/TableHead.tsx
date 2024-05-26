import React, { useState } from "react";
import { TableHead, TableRow, TableCell, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { sortSuperheroes, sortSuperheroesUp } from "../config/sort";
import { ISuperhero } from "./interfaces";

interface IProps {
  data: ISuperhero[];
  setData: Function;
}

const TableHeads: React.FC<IProps> = ({ data, setData }) => {
  const tableHead = [
    { title: "name", type: "string" },
    { title: "intelligence", type: "number" },
    { title: "strength", type: "number" },
    { title: "speed", type: "number" },
    { title: "durability", type: "number" },
    { title: "power", type: "number" },
    { title: "combat", type: "number" },
    { title: "img", type: "string" },
  ];

  const [sortOrder, setSortOrder] = useState<(("asc" | "desc") | null)[]>(tableHead.map(() => null));

  const handleSort = (index: number, property: keyof ISuperhero) => {
    const newSortOrder = [...sortOrder];
    newSortOrder[index] = sortOrder[index] === "asc" ? "desc" : "asc";
    const sortedData = sortOrder[index] === "asc" ? sortSuperheroes(data, property) : sortSuperheroesUp(data, property);
    setData(sortedData);
    setSortOrder(newSortOrder);
  };

  return (
    <TableHead>
      <TableRow>
        {tableHead.map((e, index) => (
          <TableCell key={e.title}>
            {e.title !== "img" && (
              <Button
                onClick={() => handleSort(index, e.title as keyof ISuperhero)}
              >
                {sortOrder[index] === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </Button>
            )}
            {e.title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeads;
