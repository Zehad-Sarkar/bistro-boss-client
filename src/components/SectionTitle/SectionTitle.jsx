const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto my-4 text-center md:w-4/12">
      <p className="mb-2 text-yellow-600">--- {subHeading} ---</p>
      <h2 className="py-3 text-3xl font-medium uppercase border-y-2">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
