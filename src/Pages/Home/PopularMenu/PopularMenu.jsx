import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "../../../sharedPages/Items/Item";
import useMenu from "../../../hooks/menu/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section>
      {/* section title */}
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      {/* popular menu */}
      <div className="grid gap-4 md:grid-cols-2">
        {popularMenu.map((item) => (
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
