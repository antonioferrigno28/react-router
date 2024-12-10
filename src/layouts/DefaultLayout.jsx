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
        <div className="text-bg-dark py-4">
          <div className="container ">
            <h1>Footer</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}
