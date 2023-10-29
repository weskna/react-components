import React, { useEffect, useState } from "react";
import { useFilters } from "../filtersContext";

const Drawer = () => {
  const { state, dispatch } = useFilters();
  const { filters } = state;
  const [checked, setChecked] = useState([]);

  const handleChecked = (checked, filterType, value) => {
    if (checked) {
      dispatch({
        type: "addFilter",
        filterType,
        value,
      });
    } else {
      dispatch({
        type: "removeFilter",
        filterType,
        value,
      });
    }
  };

  useEffect(() => {
    setChecked(filters.map((filter) => filter.value));
  }, [filters]);

  return (
    <div style={{ border: "1px solid gray" }}>
      <label htmlFor="draft">Draft</label>
      <input
        type="checkbox"
        name="status"
        id="draft"
        value="draft"
        checked={checked.includes("draft")}
        onChange={() => handleChecked(event.target.checked, "status", "draft")}
      />
      <label htmlFor="published">Published</label>
      <input
        type="checkbox"
        name="status"
        id="published"
        value="published"
        checked={checked.includes("published")}
        onChange={() =>
          handleChecked(event.target.checked, "status", "published")
        }
      />
    </div>
  );
};

export default Drawer;
