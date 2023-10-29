import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`todo`}>Todo</Link> - add items to the list and sort them
            (edit, delete items from the list, sort them by dragging and
            dropping)
          </li>
          <li>
            <Link to={`table`}>Table</Link> - display items in a table with sort
            and filter options (use drawer, chips to display filters)
          </li>
        </ul>
      </nav>
      <main>
        {/* all the other elements */}
        <Outlet />
      </main>
    </>
  );
}
