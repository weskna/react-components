import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Drawer from "../components/Drawer";
import FiltersChips from "../components/FiltersChips";
import Table from "../components/Table";
import { FiltersProvider, useFilters } from "../filtersContext";

const TableList = () => {
  const items = [
    {
      id: uuidv4(),
      title: "Row 1",
      status: "draft",
      createdAt: "20230101",
    },
    {
      id: uuidv4(),
      title: "Row 2",
      status: "draft",
      createdAt: "20230101",
    },
    {
      id: uuidv4(),
      title: "Row 3",
      status: "published",
      createdAt: "20230101",
    },
  ];

  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <FiltersProvider>
      <div>
        <button type="button" onClick={() => setToggleDrawer(!toggleDrawer)}>
          Open filters
        </button>
        <FiltersChips />
      </div>
      <Table items={items} />
      <Drawer toggleDrawer={toggleDrawer} />
    </FiltersProvider>
  );
};

export default TableList;
