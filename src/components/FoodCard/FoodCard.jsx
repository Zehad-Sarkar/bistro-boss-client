import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (i) => {
    if (user && user.email) {
      const orderItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();//refetch for update the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your order has been succesfull",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You need to login first order this food",
        text: "go to login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl " />
        <p className="absolute p-2 font-bold text-white rounded right-10 top-10 bg-slate-800">
          ${price}
        </p>
      </figure>
      <div className="items-center p-4 text-center card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="mt-4 mb-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
