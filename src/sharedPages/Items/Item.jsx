const Item = ({ item }) => {
  // console.log("item", item);
  const { name, price, image, recipe } = item;

  return (
    <div className="flex gap-3">
      <img src={image} alt="food" style={{borderRadius:'0 104px 104px 104px'}} className="w-20 h-20"/>
      <div className="flex">
        <div>
          <h3 className="text-3xl">{name}.....................</h3>
          <p>{recipe}</p>
        </div>
        <p className="font-bold text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default Item;
