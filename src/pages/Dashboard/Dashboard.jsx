
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="">Inicio</Link> | <Link to="settings">Configuraciones</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
