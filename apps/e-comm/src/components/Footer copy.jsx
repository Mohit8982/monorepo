import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerColumn">
          <h4>ABOUT</h4>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/corporate-information">Corporate Information</Link>
        </div>

        <div className="footerColumn">
          <h4>HELP</h4>
          <Link to="/payments">Payments</Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/cancellation-returns">Cancellation & Returns</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footerColumn">
          <h4>CONSUMER POLICY</h4>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/terms-and-condition">Terms Of Use</Link>
          <Link to="/security">Security</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        <div className="footerColumn">
          <h4>SOCIAL</h4>
          <Link to="/facebook">Facebook</Link>
          <Link to="/twitter">Twitter</Link>
          <Link to="/instagram">Instagram</Link>
          <Link to="/youtube">YouTube</Link>
        </div>

        <div className="footerDivider"></div>

        <div className="footerColumn address">
          <h4>Mail Us:</h4>
          <p>
            Demo Ecommerce Pvt. Ltd.
            <br />
            Building 1, Tech Park
            <br />
            Indore, Madhya Pradesh
            <br />
            India - 452001
          </p>
        </div>

        <div className="footerColumn address">
          <h4>Registered Office Address:</h4>
          <p>
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

      <div className="footerBottom">
        <div>🛍 Become a Seller</div>
        <div>📢 Advertise</div>
        <div>🎁 Gift Cards</div>
        <div>❓ Help Center</div>

        <div className="copyright">© 2026 DemoMart.com</div>
      </div>
    </footer>
  );
};

export default Footer;
