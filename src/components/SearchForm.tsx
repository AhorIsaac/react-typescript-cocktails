import React, { SyntheticEvent, useEffect } from "react";
import { useGlobalContext } from "../context";

export interface ISearchForm {}

const SearchForm: React.FC<ISearchForm> = (): React.ReactElement => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<any>("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form glassmorphism" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> search your favorite cocktail </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
