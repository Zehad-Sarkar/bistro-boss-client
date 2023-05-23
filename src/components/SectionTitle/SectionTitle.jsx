const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto my-8 text-center">
      <p className="py-2 text-yellow-600">{subHeading}</p>
      <p className="py-4 text-4xl uppercase border-y-2">{heading}</p>
    </div>
  );
};

export default SectionTitle;
