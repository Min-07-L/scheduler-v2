import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

export let AppContext = createContext(AppContext);

export default function Layout() {
  let [user, setUser] = useState(undefined);
  let [heatmap, setHeatmap] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, heatmap, setHeatmap }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
