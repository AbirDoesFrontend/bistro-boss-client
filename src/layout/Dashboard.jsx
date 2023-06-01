import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#d1a054] text-base-content">
          {/* Sidebar content here */}
          <li className="uppercase">
            <NavLink to={"/dashboard/userhome"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={"/dashboard/reservations"}>
              <FaCalendarAlt /> Reservations
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={"/dashboard/history"}>
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={"/dashboard/mycart"}>
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <div className="divider before:bg-white after:bg-white"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Our Menu</NavLink>
          </li>
          <li>
            <NavLink
              to={"/order/salad"}
            >
              Order
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
