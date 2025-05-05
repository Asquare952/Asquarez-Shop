"use client"

import {Products} from "../../app/utils/productsData";
import { createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext()

export const FilterProvider = ({children}) =>{

const [product, setProduct] = useState(Products);
const [filters, setFilters] = useState({ brand: [], category: [] });
const [filterVisibility, setFilterVisibility] = useState({
  brands: true,
  categories: true,
  // price: true,
  // ratings: true,
});

useEffect(() => {
  if (filters.brand.length === 0 && filters.category.length === 0) {
    setProduct(Products); // Show all products if no filters are applied
    return;
  }

  const filtered = Products.filter(
    (product) =>
      (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
      (filters.category.length === 0 ||
        filters.category.includes(product.category))
  );

  setProduct(filtered);
}, [filters]);

const toggleFilter = (filterName) => {
  setFilterVisibility((prev) => ({
    ...prev,
    [filterName]: !prev[filterName], // Toggle the specific filter
  }));
};

const handleFilterChange = (type, value) => {
  setFilters((prev) => ({
    ...prev,
    [type]: prev[type].includes(value)
      ? prev[type].filter((item) => item !== value)
      : [...prev[type], value],
  }));
};



const clearFilters = () => {
  setFilters({ brand: [], category: [] });
  setProduct(Products);
};

return (
  <FilterContext.Provider
    value={{
      product,
      filterVisibility,
      filters,
      toggleFilter,
      handleFilterChange,
      clearFilters
    }}
  >
    {children}
  </FilterContext.Provider>
);
};

export const useFilter = () => useContext(FilterContext)