import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "../Featured/Featured.css";

const Featured = () => {
  return (
    <section className="font-bold text-white featured-bg bg-fixed">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="items-center justify-center gap-4 px-16 py-8 md:flex bg-slate-500 opacity-40">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="">
          <p>Aug 20, 2023</p>
          <p className="font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            possimus repellendus officia assumenda beatae atque autem excepturi
            molestias omnis eveniet est, fuga a quo voluptas neque laboriosam
            distinctio iusto. Esse incidunt inventore vero minus, dolores quis
            ipsa similique nulla blanditiis earum sint dolore deleniti? Ad ab
            numquam deleniti nobis alias!
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
