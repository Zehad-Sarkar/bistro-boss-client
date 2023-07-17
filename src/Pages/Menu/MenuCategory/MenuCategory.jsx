import { Link } from "react-router-dom";
import Item from "../../../sharedPages/Items/Item";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid gap-4 my-8 md:grid-cols-2">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      {/* order now button by categories tab */}
      <Link to={`/orderFood/${title}`} className="block mx-auto my-6 w-60">
        <button className="font-bold border-0 border-b-4 btn-outline btn">
          Order Now
        </button>
      </Link>
    </>
  );
};

export default MenuCategory;
