const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
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
          <button className="mt-4 mb-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
