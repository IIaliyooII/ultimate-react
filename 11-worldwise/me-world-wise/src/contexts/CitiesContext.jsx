/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return <CitiesContext.Provider value={{ cities, isLoading }}>{children}</CitiesContext.Provider>;
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("CitiesContext was useed outside of CitiesProvider");
  return context;
};

export { CitiesProvider, useCities };
