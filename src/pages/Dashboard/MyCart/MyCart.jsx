import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Do you want to remove order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your order has been deleted.",
                  "success"
                );
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your food order is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase flex justify-evenly items-center mb-5">
        <h3 className="text-2xl">Total Orders : {cart.length}</h3>
        <h3 className="text-2xl">Total Price : ${total}</h3>
        <Link to={'/dashboard/payment'}>
          <button className="btn bg-[#d1a054] btn-warning text-black">
            pay
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="uppercase inter">Food</th>
              <th className="uppercase inter">Item Name</th>
              <th className="uppercase inter">Price</th>
              <th className="uppercase inter">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th className="inter">{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Food Image" />
                    </div>
                  </div>
                </td>
                <td className="inter">{item.name}</td>
                <td className="text-end inter">${item.price}</td>
                <td>
                  <button
                    className="btn btn-lg btn-error text-white"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
