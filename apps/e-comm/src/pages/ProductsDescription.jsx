import { useLocation } from "react-router-dom";

const ProductsDescription = () => {
  const location = useLocation();
  const stateData = location.state;

  return (
    <>
      <div className="productPage">
        <div className="productImageSection">
          <img src={stateData.image} alt="iPhone 16" className="productImage" />

          <div className="actionButtons">
            <button>Add To Cart</button>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="productInfoSection">
          <h1>{stateData.name}</h1>

          <div className="ratingSection">
            <span className="rating">4.8 ★</span>
            <span>1250 Ratings & Reviews</span>
          </div>

          <p className="description">{stateData.description}</p>

          <h3>Highlights</h3>

          <ul className="highlights">
            <li>128 GB Storage</li>
            <li>8 GB RAM</li>
            <li>A18 Bionic Processor</li>
            <li>48 MP + 12 MP Camera</li>
            <li>6.1 Inch OLED Display</li>
            <li>3561 mAh Battery</li>
          </ul>

          <h3>Specifications</h3>

          <table>
            <tbody>
              <tr>
                <td>Brand</td>
                <td>Apple</td>
              </tr>
              <tr>
                <td>Display</td>
                <td>6.1 inch OLED</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>A18 Bionic</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>8 GB</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>128 GB</td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>3561 mAh</td>
              </tr>
              <tr>
                <td>Camera</td>
                <td>48 MP + 12 MP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="priceSection">
          <div className="priceWrapper">
            <span className="sellingPrice">₹{stateData.price}</span>
            <span className="discount">15% Off</span>
          </div>

          <div className="mrp">
            MRP <s>₹94,999</s>
          </div>

          <p className="delivery">Free Delivery</p>

          <p className="stock">
            Stock Available: <strong>10</strong>
          </p>

          <button className="buyNowBtn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default ProductsDescription;
