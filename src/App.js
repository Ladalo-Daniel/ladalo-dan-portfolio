import Home from "./pages/home/Home";
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
//import Main from "./pages/mainpage/Main";
//import About from "./pages/about/About";
//import About from "./pages/about/About";
//import Main from "./pages/mainpage/Main";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={ <Layout /> }>
       <Route index element={<Home />} />
       <Route path="/about" element={<About />} />
    </Route>
  ))

  return (
   <RouterProvider router={router} />
  );
}

export default App;
