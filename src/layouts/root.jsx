import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`todo`}>Todo</Link>
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
