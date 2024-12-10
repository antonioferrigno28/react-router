import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <header>
        <h1>Ao</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>Ao footer</h1>
      </footer>
    </div>
  );
}
