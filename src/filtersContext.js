import { createContext, useContext, useReducer } from "react";

const FiltersContext = createContext();

function filtersReducer(state, action) {
  switch (action.type) {
    case "addFilter": {
      switch (action.id) {
        case "createdAt":
          let _filters = [...state.filters];
          let index = _filters.findIndex((item) => item.id === "createdAt");
          if (index !== -1) {
            _filters[index] = {
              id: action.id,
              type: action.filterType,
              value: action.value,
            };
            return {
              filters: _filters,
            };
          } else {
            return {
              filters: [
                ...state.filters,
                {
                  id: action.id,
                  type: action.filterType,
                  value: action.value,
                },
              ],
            };
          }
        default:
          return {
            filters: [
              ...state.filters,
              {
                id: action.id,
                type: action.filterType,
                value: action.value,
              },
            ],
          };
      }
    }
    case "removeFilter": {
      let _filters = [...state.filters];
      _filters = _filters.filter((item) => item.id !== action.id);
      return { filters: _filters };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(filtersReducer, { filters: [] });
  const value = { state, dispatch };
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}

function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
}

export { FiltersProvider, useFilters };
