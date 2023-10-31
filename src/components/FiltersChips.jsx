import React from "react";
import { useFilters } from "../filtersContext";
import Chip from "../components/Chip";

const FiltersChips = () => {
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
          <Chip
            key={filter.id}
            chipId={filter.id}
            chipType={filter.type}
            chipValue={filter.value}
            removable={filter.type === "sort" ? false : true}
            onRemove={() => {
              dispatch({
                type: "removeFilter",
                id: filter.id,
                filterType: filter.type,
                value: filter.value,
              });
            }}
          />
        ))}
    </div>
  );
};

export default FiltersChips;
