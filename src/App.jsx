import { BrowserRouter, Route, Routes } from "react-router";
import { NavBarComponent } from "./components";
import { aboutPath, contactPath, homePath } from "./constant";
import { About, Contact, Home } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path={homePath} element={<Home />} />
        <Route path={aboutPath} element={<About />} />
        <Route path={contactPath} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
