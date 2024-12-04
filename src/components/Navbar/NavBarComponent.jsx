import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";
import { aboutPath, contactPath, homePath } from "../../constant/paths";
import ItemNavBar from "../ItemNavbar/ItemNavBar";

const menuItems = [
  { id: 1, path: homePath, text: "Home" },
  { id: 2, path: aboutPath, text: "About" },
  { id: 3, path: contactPath, text: "Contact" },
];

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link className="text-decoration-none" to={homePath}>
          E-commerce
        </Link>
        <Nav className="me-auto">
          {menuItems.map((item) => (
            <ItemNavBar key={item.id} item={item} />
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
