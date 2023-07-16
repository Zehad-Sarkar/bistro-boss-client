import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "../Featured/Featured.css";

const Featured = () => {
  const dates = new Date().getFullYear();
  return (
    <div className="p-16 my-16 featured-bg">
      {/* section title */}
      <SectionTitle subHeading={"Check it out"} heading={"Our Featured Item"} />
      {/* featurd section */}
      <div className="items-center gap-4 md:flex">
        <img src={featured} alt="" className="w-96" />
        <div className="p-2 space-y-4 text-white bg-black opacity-60">
          <p>March 20, {dates}</p>
          <p className="uppercase">Where can i get it?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis qui
            iure consectetur voluptatibus cupiditate iusto exercitationem! Nemo
            laudantium, quidem magnam deleniti suscipit temporibus, aspernatur
            est voluptatum natus perferendis dolorum soluta, voluptatem quas
            accusantium officiis magni ea tempore voluptatibus numquam. Quas!
          </p>
          <button className="btn-outline btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
