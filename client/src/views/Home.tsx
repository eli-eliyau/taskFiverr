import { Container } from "@mui/material";
import React from "react";
import Search from "../components/Search";
import Tables from "../components/Tables";
import { ISuperhero } from "../components/interfaces";
import TodayDate from "../components/TodayDate";

const Home = () => {
  const [superheroSearch, setSuperheroSearch] = React.useState<ISuperhero[]>(
    []
  );
  return (
    <Container maxWidth="xl">
      <TodayDate />
      <Search
        superheroSearch={superheroSearch}
        setSuperheroSearch={setSuperheroSearch}
      />
      <Tables superheros={superheroSearch} setSuperheros={setSuperheroSearch} />
    </Container>
  );
};

export default Home;
