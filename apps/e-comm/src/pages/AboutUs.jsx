const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-400 to-gray-300 px-5 py-20 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold">About ShopSphere</h1>

        <p className="mx-auto max-w-3xl text-lg leading-8">
          Your one-stop destination for quality products, trusted brands and
          seamless online shopping experiences.
        </p>
      </section>

      {/* About Section */}
      <section className="mx-auto my-12 max-w-6xl px-5">
        <div className="rounded-xl bg-white p-10 shadow-md">
          <h2 className="mb-5 text-3xl font-semibold text-gray-900">
            Who We Are
          </h2>

          <p className="mb-4 leading-8 text-gray-600">
            ShopSphere is an online marketplace dedicated to providing customers
            with a wide range of products at competitive prices.
          </p>

          <p className="mb-4 leading-8 text-gray-600">
            From smartphones and laptops to home essentials and accessories, we
            bring the best products from trusted brands directly to your
            doorstep.
          </p>

          <p className="leading-8 text-gray-600">
            Our mission is to make online shopping simple, reliable and
            accessible for everyone by combining technology, convenience and
            excellent customer service.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
          Why Choose Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Trusted Brands</h3>
            <p className="leading-7 text-gray-600">
              We partner with top brands to ensure authentic and quality
              products for our customers.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Fast Delivery</h3>
            <p className="leading-7 text-gray-600">
              Get your orders delivered quickly and securely right to your
              doorstep.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Excellent Support</h3>
            <p className="leading-7 text-gray-600">
              Our customer support team is always ready to assist you whenever
              you need help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
