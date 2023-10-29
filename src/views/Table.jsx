import { v4 as uuidv4 } from "uuid";
import Chip from "../components/Chip";
import Drawer from "../components/Drawer";
import { FiltersProvider } from "../filtersContext";

export default function Table() {
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

  return (
    <FiltersProvider>
      <Chip />
      <table
        style={{
          width: "100vw",
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Drawer />
    </FiltersProvider>
  );
}
