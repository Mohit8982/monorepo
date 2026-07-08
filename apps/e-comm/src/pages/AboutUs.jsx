// import { StatCard, FeatureCard, InfoCard } from "../../components/";

const stats = [
  {
    value: "1000+",
    label: "Products",
  },
  {
    value: "500+",
    label: "Happy Customers",
  },
  {
    value: "50+",
    label: "Trusted Brands",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
];

const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Quick and secure shipping across the country.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "Multiple trusted payment options for safe transactions.",
  },
  {
    icon: "💯",
    title: "Quality Products",
    description: "Only genuine products from verified sellers and brands.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    description: "Dedicated support team available whenever you need help.",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutPage">
      <section className="heroSection">
        <h1>About ShopSphere</h1>
        <p>
          Your one-stop destination for quality products, trusted brands and
          seamless online shopping experiences.
        </p>
      </section>

      <section className="aboutSection">
        <div className="content">
          <h2>Who We Are</h2>

          <p>
            ShopSphere is an online marketplace dedicated to providing customers
            with a wide range of products at competitive prices.
          </p>

          <p>
            From smartphones and laptops to home essentials and accessories, we
            bring the best products from trusted brands directly to your
            doorstep.
          </p>

          <p>
            Our mission is to make online shopping simple, reliable and
            accessible for everyone by combining technology, convenience and
            excellent customer service.
          </p>
        </div>
      </section>

      <section className="statsSection">
        {/* {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))} */}
      </section>

      <section className="missionSection">
        {/* <InfoCard
          title="Our Mission"
          description="To deliver exceptional value through innovative technology, transparent pricing and customer-centric services."
        />

        <InfoCard
          title="Our Vision"
          description="To become the most trusted and customer-friendly e-commerce platform by continuously improving shopping experiences."
        /> */}
      </section>

      <section className="teamSection">
        <h2>Why Choose Us?</h2>

        <div className="features">
          {/* {features.map((feature) => (
            // <FeatureCard
            //   key={feature.title}
            //   icon={feature.icon}
            //   title={feature.title}
            //   description={feature.description}
            // />
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
