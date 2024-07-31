import  Home  from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/myprojects" element={<MyProjects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
