import { Link } from "react-router-dom";
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

      <Link to={`/order/${title}`}>
        <button className="mt-4 mb-4 border-0 border-b-4 btn btn-outline">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
