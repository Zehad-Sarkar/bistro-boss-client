const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="w-full shadow-xl card bg-base-100">
      <figure>
        <img src={image} alt="food" />
        <p className="absolute px-2 py-1 font-medium text-yellow-600 rounded right-6 bg-slate-900 top-4">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
