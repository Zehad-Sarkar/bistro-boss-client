import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  //delete item event handler added
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
        fetch(`http://localhost:5000/deleteCart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center mb-4 justify-evenly">
        <p>Total Item: {cart?.length}</p>
        <p>Total Price: {total}</p>
        <button className="w-32 btn btn-outline btn-primary">Pay</button>
      </div>
      {/* table */}
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {cart.map((item, i) => (
              <tr key={i}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src={item?.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>$ {item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
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

export default MyCart;
