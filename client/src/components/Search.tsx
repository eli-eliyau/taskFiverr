// Search Component
import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  List,
  ListItem,
  CircularProgress,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { ISuperhero } from "./interfaces";
import axios from "axios";
import { URL_SERVER } from "../App";

interface ISearchProps {
  superheroSearch: ISuperhero[];
  setSuperheroSearch: Function;
}

const Search: React.FC<ISearchProps> = ({
  superheroSearch,
  setSuperheroSearch,
}) => {
  const [data, setData] = useState<ISuperhero[]>([]);

  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<keyof ISuperhero>("name");
  
  useEffect(() => {
    axios
      .get(`${URL_SERVER}/superhero`, )
      .then((response) => {
        setData(response.data);
        setSuperheroSearch(response.data)
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, []);

  useEffect(() => {
    const fetchResults = () => {
      if (!query) {
        setSuperheroSearch(data)
        return;
      }

      const searchResults = superheroSearch.filter((item) =>
        item[category]
          ? item[category].toString().toLowerCase().includes(query.toLowerCase())
          : false
      );
      
      setSuperheroSearch(searchResults)
    };
    fetchResults()
   
  }, [query, category]);

  const superheroKeys: (keyof ISuperhero)[] = [
    "name",
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
  ];

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Search Superheroes
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value as keyof ISuperhero)}
            variant="outlined"
            sx={{marginRight: "1rem" , width:200}}
          >
            {superheroKeys.map((key) => (
              <MenuItem key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </MenuItem>
            ))}
          </Select>
          <TextField
            variant="outlined"
            placeholder={`Search by ${category}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
          />
        </Box>
      
      </Box>
    </Container>
  );
};

export default Search;
