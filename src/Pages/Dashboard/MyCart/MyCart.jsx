import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <div className="flex items-center mb-4 justify-evenly">
        <p>Total Item: {cart?.length}</p>
        <p>Total Price: {total}</p>
        <button className="w-32 btn btn-outline btn-primary">Pay</button>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
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
          <tbody>
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
                  <button className="btn btn-outline btn-primary">
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
