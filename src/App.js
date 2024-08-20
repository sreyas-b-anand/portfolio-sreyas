//router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

//components
import Animation from "./components/animation/Animation";

//react
import React, { useState, useEffect } from "react";

export const DarkContext = React.createContext(null);
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.localStorage.getItem("darkMode") === "true";
  });
 
  useEffect(() => {
    const app = document.documentElement;
    
    
    if (darkMode) {
      app.classList.add("dark");
    } else {
      app.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      {display && <Animation />}
      {!display && (
        <DarkContext.Provider value={{ darkMode, setDarkMode }}>
          <RouterProvider router={router} />
        </DarkContext.Provider>
      )}
    </>
  );
}

export default App;
