import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../../sharedPages/MenuItems/MenuItems";
import useMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((items) => items.category === "popular");

  return (
    <section className="mb-12 text-center">
      <SectionTitle
        subHeading="---Popular Items---"
        heading="From Our Menu"
      ></SectionTitle>

      <div className="grid gap-10 md:grid-cols-2">
        {popularItem.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>

      <button className="mt-8 border-0 border-b-4 btn btn-outline">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
