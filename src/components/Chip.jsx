import React, { useContext } from "react";
import { useFilters } from "../filtersContext";

const Chip = () => {
  const { state, dispatch } = useFilters();
  const { filters } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {filters &&
        filters.map((filter) => (
          <div
            key={filter.value}
            style={{
              padding: "0.25rem",
              fontSize: "0.75rem",
              borderRadius: "0.5rem",
              backgroundColor:
                filter.type === "status"
                  ? "salmon"
                  : filter.type === "createdAt"
                  ? "magenta"
                  : "gray",
            }}
          >
            <span>{filter.value}</span>
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "removeFilter",
                  id: filter.id,
                  filterType: filter.type,
                  value: filter.value,
                })
              }
              style={{ marginLeft: "0.25rem" }}
            >
              x
            </button>
          </div>
        ))}
    </div>
  );
};

export default Chip;
