import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="wrap">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="container">
          <h1>Ao footer</h1>
        </div>
      </footer>
    </div>
  );
}
