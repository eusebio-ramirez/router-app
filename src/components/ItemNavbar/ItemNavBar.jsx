import { Link } from "react-router";
import "./ItemNavBar.css";

// eslint-disable-next-line react/prop-types
const ItemNavBar = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { path, text } = item;
  return (
    <Link className="item" to={path}>
      {text}
    </Link>
  );
};

export default ItemNavBar;
