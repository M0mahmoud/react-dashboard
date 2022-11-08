import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  Footer,
  LoadingSpinner,
  Navbar,
  Sidebar,
  ThemeSettings,
} from "./Components";

import "./App.css";
import { useStateContext } from "./Context/ContextProvider";

const Ecommerce = lazy(() => import("./Pages/Ecommerce"));
const Orders = lazy(() => import("./Pages/Orders"));
const Calendar = lazy(() => import("./Pages/Calendar"));
const Employees = lazy(() => import("./Pages/Employees"));
const Customers = lazy(() => import("./Pages/Customers"));
const Kanban = lazy(() => import("./Pages/Kanban"));
const Area = lazy(() => import("./Pages/Charts/Area"));
const Pie = lazy(() => import("./Pages/Charts/Pie"));
const ColorMapping = lazy(() => import("./Pages/Charts/ColorMapping"));
const Editor = lazy(() => import("./Pages/Editor"));

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
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Ecommerce />
                    </Suspense>
                  }
                />
                <Route
                  path="/ecommerce"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Ecommerce />
                    </Suspense>
                  }
                />
                {/* pages  */}
                <Route
                  path="/orders"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Orders />
                    </Suspense>
                  }
                />
                <Route
                  path="/employees"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Employees />
                    </Suspense>
                  }
                />
                <Route
                  path="/customers"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Customers />
                    </Suspense>
                  }
                />
                {/* apps  */}
                <Route
                  path="/kanban"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Kanban />
                    </Suspense>
                  }
                />
                <Route
                  path="/editor"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Editor />
                    </Suspense>
                  }
                />
                <Route
                  path="/calendar"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Calendar />
                    </Suspense>
                  }
                />
                {/* charts  */}
                <Route
                  path="/area"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Area />
                    </Suspense>
                  }
                />
                <Route
                  path="/pie"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Pie />
                    </Suspense>
                  }
                />
                <Route
                  path="/color-mapping"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ColorMapping />
                    </Suspense>
                  }
                />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
