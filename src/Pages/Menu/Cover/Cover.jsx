import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <>
      <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={`${img}`}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="h-[450px] hero">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">Would you like to try a dish?</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
