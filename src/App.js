import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Footer, Navbar, Sidebar, ThemeSettings } from "./Components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Area,
  Pie,
  ColorMapping,
  Editor,
} from "./Pages";

import "./App.css";
import { useStateContext } from "./Context/ContextProvider";

function App() {
  const {
    activeMenu,
    setThemeSettings,
    themeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg h-full">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : " flex-2 "
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* charts  */}
                <Route path="/area" element={<Area />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
