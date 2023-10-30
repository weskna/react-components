import React, { useEffect, useState } from "react";
import { useFilters } from "../filtersContext";
import { v4 as uuidv4 } from "uuid";

const Drawer = () => {
  const { state, dispatch } = useFilters();
  const { filters } = state;
  const [activeFilters, setActiveFilters] = useState([]);

  const handleChecked = (checked, id, filterType, value) => {
    if (checked) {
      dispatch({
        type: "addFilter",
        id,
        filterType,
        value,
      });
    } else {
      dispatch({
        type: "removeFilter",
        id,
        filterType,
        value,
      });
    }
  };

  useEffect(() => {
    const _activeFilters = [];
    filters.map((filter) =>
      _activeFilters.push({
        id: filter.id,
        value: filter.value,
      }),
    );
    setActiveFilters(_activeFilters);
  }, [filters]);

  return (
    <div style={{ border: "1px solid gray" }}>
      {JSON.stringify(activeFilters)}
      <label htmlFor="draft">Draft</label>
      <input
        type="checkbox"
        name="status"
        id="draft"
        value="draft"
        checked={activeFilters.some((filter) => filter.id === "draft")}
        onChange={() =>
          handleChecked(event.target.checked, "draft", "status", "draft")
        }
      />
      <label htmlFor="published">Published</label>
      <input
        type="checkbox"
        name="status"
        id="published"
        value="published"
        checked={activeFilters.some((filter) => filter.id === "published")}
        onChange={() =>
          handleChecked(
            event.target.checked,
            "published",
            "status",
            "published",
          )
        }
      />
      <label htmlFor="createdAt">Created At</label>
      <input
        type="date"
        name="createdAt"
        id="createdAt"
        value={activeFilters
          .filter((filter) => filter.id === "createdAt")
          .map(function (created) {
            return created.value;
          })}
        onChange={(e) => {
          dispatch({
            type: "addFilter",
            id: "createdAt",
            filterType: "createdAt",
            value: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default Drawer;
