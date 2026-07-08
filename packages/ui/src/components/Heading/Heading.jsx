const Heading = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>

      {subtitle && <p className="mt-2 text-base text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default Heading;
