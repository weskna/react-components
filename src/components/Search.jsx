import { v4 as uuidv4 } from "uuid";
import { useFilters } from "../filtersContext";
import Chip from "./Chip";

const Search = ({ label, handleSearch, chips = [] }) => {
  const { dispatch } = useFilters();

  return (
    <div>
      <label htmlFor="search" style={{ display: "block", margin: "0.25rem 0" }}>
        {label}
      </label>
      <input
        type="search"
        name="search"
        id="search"
        onKeyUp={(event) =>
          handleSearch(event, uuidv4(), "search", event.target.value)
        }
      />
      {chips && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            margin: "0.5rem 0",
          }}
        >
          {chips.map((chip) => (
            <Chip
              key={chip.id}
              chipId={chip.id}
              chipType={chip.type}
              chipValue={chip.value}
              removable={true}
              onRemove={() => {
                dispatch({
                  type: "removeFilter",
                  id: chip.id,
                  filterType: chip.type,
                  value: chip.value,
                });
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
