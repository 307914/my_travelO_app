import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from '../reducer/filterReducer';

const intialValue = {
  isfilteropen: false,
  pricerange: [300, 20000],
  noOfBedrooms: 'Any',
  noOfBathrooms: 'Any',
  noOfBeds: 'Any',
  propertytype: '',
  ratingNumber: 1,
  iscancelable: true,
};

const FilterContext = createContext(intialValue);

const FilterContextProvider = ({ children }) => {
  const [
    {
      isfilteropen,
      noOfBathrooms,
      propertytype,
      ratingNumber,
      noOfBedrooms,
      noOfBeds,
      iscancelable,
      pricerange,
    },
    filterDispatch,
  ] = useReducer(filterReducer, intialValue);

  return (
    <FilterContext.Provider
      value={{
        isfilteropen,
        pricerange,
        propertytype,
        ratingNumber,
        noOfBathrooms,
        noOfBedrooms,
        iscancelable,
        noOfBeds,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterContextProvider };
