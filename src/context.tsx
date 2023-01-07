/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

type AppProviderProps = {
  children: React.ReactNode;
};

type AppContextProps = {
  loading: boolean;
  searchTerm: string;
  cocktails: [];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export type CocktailProp = {
  image: string;
  name: string;
  info: string;
  id: string;
  glass: string;
};

const AppContext = React.createContext({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("a");
  const [cocktails, setCocktails] = useState<[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item: any) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
        setLoading(false);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: context.tsx ~ line 56 ~ fetchDrinks ~ error",
        error
      );
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
