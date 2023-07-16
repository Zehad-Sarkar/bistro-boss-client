import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "../../../sharedPages/Items/Item";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  // console.log("menu", menu);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  return (
    <section>
      {/* section title */}
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      {/* popular menu */}
      <div className="grid gap-4 md:grid-cols-2">
        {menu.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <button className="block mx-auto my-4 font-bold text-center border-0 border-b-4 w-52 btn-outline btn">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
