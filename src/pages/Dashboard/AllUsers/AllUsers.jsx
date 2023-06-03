import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method : 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount) {
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is now an Admin`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handleDelete = user => {

  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-4xl font-semibold text-center my-4">
        Total Users : {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-3/4 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th className="inter">#</th>
              <th className="inter">Name</th>
              <th className="inter">Email</th>
              <th className="inter">Role</th>
              <th className="inter">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="inter">{index + 1}</td>
                <td className="inter">{user.name}</td>
                <td className="inter">{user.email}</td>
                <td className="inter">{
                    user.role === 'admin' ? 'Admin' : 
                    <button
                    className="btn btn-warning text-white"
                    onClick={() => handleMakeAdmin(user)}
                  >
                    <FaUserShield size={25}/>
                  </button>
                }</td>
                <td className="inter">
                  <button
                    className="btn btn-error text-white"
                    onClick={() => handleDelete(user)}
                  >
                    <FaTrashAlt size={25}/>
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

export default AllUsers;
