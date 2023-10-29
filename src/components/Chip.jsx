import React, { useContext } from "react";
import { useFilters } from "../filtersContext";

const Chip = () => {
  const { state, dispatch } = useFilters();
  const { filters } = state;

  return (
    <div style={{ border: "1px solid gray" }}>
      {filters &&
        filters.map((filter) => (
          <div key={filter.value}>
            <span>{filter.value}</span>
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "removeFilter",
                  filterType: filter.type,
                  value: filter.value,
                })
              }
            >
              x
            </button>
          </div>
        ))}
    </div>
  );
};

export default Chip;
