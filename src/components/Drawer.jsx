import React, { useEffect, useState } from "react";
import { useFilters } from "../filtersContext";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Search from "./Search";

const Drawer = ({ toggleDrawer }) => {
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

  const handleSearch = (event, id, filterType, value) => {
    if (event.key === "Enter") {
      dispatch({
        type: "addFilter",
        id,
        filterType,
        value,
      });
      event.target.value = "";
    }
  };

  useEffect(() => {
    const _activeFilters = [];
    filters.map((filter) => _activeFilters.push(filter));
    setActiveFilters(_activeFilters);
  }, [filters]);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        background: "white",
        transition: "right 450ms",
        borderLeft: "1px solid lightgray",
        right: `${toggleDrawer ? 0 : "-100vw"}`,
      }}
    >
      <Radio
        label="Sort Ascending"
        id="asc"
        name="sort"
        value="Sort Ascending"
        checked={activeFilters.some(
          (filter) => filter.id === "sort" && filter.value === "Sort Ascending",
        )}
        onChange={(event) =>
          handleChecked(event.target.checked, "sort", "sort", "Sort Ascending")
        }
      />
      <Radio
        label="Sort Descending"
        id="desc"
        name="sort"
        value="Sort Descending"
        checked={activeFilters.some(
          (filter) =>
            filter.id === "sort" && filter.value === "Sort Descending",
        )}
        onChange={(event) =>
          handleChecked(event.target.checked, "sort", "sort", "Sort Descending")
        }
      />
      {/* <Checkbox
        label="Draft"
        id="draft"
        name="status"
        value="draft"
        checked={activeFilters.some((filter) => filter.id === "draft")}
        onChange={(event) =>
          handleChecked(event.target.checked, "draft", "status", "draft")
        }
      />
      <Checkbox
        label="Published"
        id="published"
        name="status"
        value="published"
        checked={activeFilters.some((filter) => filter.id === "published")}
        onChange={(event) =>
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
      /> */}
      <Search
        label="Search by category"
        handleSearch={handleSearch}
        chips={activeFilters.filter((filter) => filter.type === "search")}
      />
    </div>
  );
};

export default Drawer;
