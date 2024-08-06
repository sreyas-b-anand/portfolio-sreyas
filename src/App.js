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
import Animation from './components/animation/Animation'

//react
import { useState , useEffect } from "react";


function App() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
  
   const timer =  setTimeout(() => {
      setDisplay(false);
    }, 1500);

    return ()=> clearTimeout(timer)
  } , []);
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
      {!display && <RouterProvider router={router} />}
    </>
  );
}

export default App;
