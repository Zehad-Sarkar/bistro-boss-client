import React from "react";

const MenuItems = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" className="w-[100px]" />
      <div className="flex">
        <div className="">
          <p className="uppercase">{name}------------------</p>
          <p>{recipe}</p>
        </div>
        <div className="">
          <p className="text-yellow-400">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
