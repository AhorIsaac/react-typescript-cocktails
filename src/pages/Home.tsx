import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export interface IHome {}

const Home: React.FC<IHome> = (): React.ReactElement => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
