import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaListUl,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  
  const [isAdmin] = useAdmin()

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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
          {isAdmin ? (
            <>
              <li className="uppercase">
                <NavLink to={"/dashboard/adminhome"}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink to={"/dashboard/additem"}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink to={"/dashboard/manage"}>
                  <FaListUl /> Manage Items
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink to={"/dashboard/allusers"}>
                  <FaUsers /> All Users
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
                <NavLink to={"/order/salad"}>Order</NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaShoppingCart /> My Cart{" "}
                  <span className="badge badge-secondary inter">
                    +{cart?.length || 0}
                  </span>
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
                <NavLink to={"/order/salad"}>Order</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
