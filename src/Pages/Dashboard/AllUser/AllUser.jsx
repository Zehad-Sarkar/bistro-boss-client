import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash, FaUser, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  //user load from database
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  //user role make admin event handler
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/user/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `now ,${user.name} is an admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //user delete event handler
  const handleDelete = (user) => {
    // console.log(user);
  };
  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "Admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-outline btn-primary"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-outline btn-primary"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
