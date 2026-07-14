import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white">
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 lg:grid-cols-7">
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase text-gray-400">
            About
          </h4>

          <Link
            to="/contact-us"
            className="text-sm hover:text-white hover:underline"
          >
            Contact Us
          </Link>
          <Link
            to="/about-us"
            className="text-sm hover:text-white hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className="text-sm hover:text-white hover:underline"
          >
            Careers
          </Link>
          <Link
            to="/corporate-information"
            className="text-sm hover:text-white hover:underline"
          >
            Corporate Information
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase text-gray-400">
            Help
          </h4>

          <Link
            to="/payments"
            className="text-sm hover:text-white hover:underline"
          >
            Payments
          </Link>
          <Link
            to="/shipping"
            className="text-sm hover:text-white hover:underline"
          >
            Shipping
          </Link>
          <Link
            to="/cancellation-returns"
            className="text-sm hover:text-white hover:underline"
          >
            Cancellation & Returns
          </Link>
          <Link to="/faq" className="text-sm hover:text-white hover:underline">
            FAQ
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase text-gray-400">
            Consumer Policy
          </h4>

          <Link
            to="/return-policy"
            className="text-sm hover:text-white hover:underline"
          >
            Return Policy
          </Link>
          <Link
            to="/terms-and-condition"
            className="text-sm hover:text-white hover:underline"
          >
            Terms Of Use
          </Link>
          <Link
            to="/security"
            className="text-sm hover:text-white hover:underline"
          >
            Security
          </Link>
          <Link
            to="/privacy"
            className="text-sm hover:text-white hover:underline"
          >
            Privacy
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase text-gray-400">
            Social
          </h4>

          <Link
            to="/facebook"
            className="text-sm hover:text-white hover:underline"
          >
            Facebook
          </Link>
          <Link
            to="/twitter"
            className="text-sm hover:text-white hover:underline"
          >
            Twitter
          </Link>
          <Link
            to="/instagram"
            className="text-sm hover:text-white hover:underline"
          >
            Instagram
          </Link>
          <Link
            to="/youtube"
            className="text-sm hover:text-white hover:underline"
          >
            YouTube
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden border-l border-gray-600 lg:block" />

        <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
          <h4 className="text-xs font-semibold text-gray-400">Mail Us:</h4>

          <p className="text-sm leading-6 text-gray-300">
            Demo Ecommerce Pvt. Ltd.
            <br />
            Building 1, Tech Park
            <br />
            Indore, Madhya Pradesh
            <br />
            India - 452001
          </p>
        </div>

        <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
          <h4 className="text-xs font-semibold text-gray-400">
            Registered Office Address:
          </h4>

          <p className="text-sm leading-6 text-gray-300">
            Demo Ecommerce Pvt. Ltd.
            <br />
            Building 1, Tech Park
            <br />
            Indore, Madhya Pradesh
            <br />
            India - 452001
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 text-sm lg:justify-between">
          <div className="flex items-center gap-2">
            🛍 <span>Become a Seller</span>
          </div>
          <div className="flex items-center gap-2">
            📢 <span>Advertise</span>
          </div>
          <div className="flex items-center gap-2">
            🎁 <span>Gift Cards</span>
          </div>
          <div className="flex items-center gap-2">
            ❓ <span>Help Center</span>
          </div>
          <div className="text-gray-300">© 2026 ShopSphere.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
