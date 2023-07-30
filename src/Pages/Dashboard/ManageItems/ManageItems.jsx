import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/menu/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosInterceptor/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/itemDelete/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <SectionTitle subHeading="Hurry Up" heading="Manage All Items" />
      {/* manage items */}

      <table className="table w-full">
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((menuItem, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <img src={menuItem?.image} className="w-16 h-16 rounded-md" />
              </td>
              <td>{menuItem.name}</td>
              <td>{menuItem.category}</td>
              <td className="text-right">{menuItem.price}</td>
              <td>
                <button
                  // onClick={() => handleUpdate(menuItem)}
                  className="btn btn-outline btn-primary"
                >
                  <FaEdit />
                </button>
              </td>
              <th>
                <button
                  onClick={() => handleDelete(menuItem)}
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
  );
};

export default ManageItems;
