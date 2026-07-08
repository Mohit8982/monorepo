const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="featureCard">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
