import Cover from "../../Cover/Cover";
import MenuItems from "../../MenuItems/MenuItems";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="text-center">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid gap-10 mt-16 md:grid-cols-2">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>

      <button className="mt-8 mb-6 border-0 border-b-4 btn btn-outline">
        ORDER YOUR FAVOURITE FOOD
      </button>
    </div>
  );
};

export default MenuCategory;
