import { BrowserRouter, Route, Routes } from "react-router";
import { NavBarComponent } from "./components";
import { aboutPath, contactPath, homePath, productPath } from "./constant";
import { About, Contact, Home, ProductDetail, ProductList } from "./pages";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import DashboardSettings from "./pages/Dashboard/DashboardSettings";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path={homePath} element={<Home />} />
        <Route path={aboutPath} element={<About />} />
        <Route path={productPath} element={<ProductList />} />
        <Route path={`${productPath}/:id`} element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        <Route path={contactPath} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
