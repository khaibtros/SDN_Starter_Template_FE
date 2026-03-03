import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Our Menu</h1>
        <p>Discover exquisite dishes crafted by our world-class chefs</p>
      </div>

      <div className="category-filter">
        <button className="active">
          All
        </button>
        <button>Signature</button>
        <button>Starters</button>
        <button>Mains</button>
      </div>

      <div className="dishes-grid">
        <Link to="/dishes/example-1" className="dish-card">
          <div className="dish-image">
            <div className="no-image">Image</div>
            <span className="badge-signature">Signature</span>
          </div>
          <div className="dish-info">
            <h3>Grilled Pork with Vermicelli</h3>
            <p className="dish-category">Signature</p>
            <p className="dish-chef">by Linh Nguyen</p>
            <div className="dish-footer">
              <span className="dish-price">120,000 ₫</span>
              <span className="dish-rating">★★★★☆ 4.8</span>
            </div>
          </div>
        </Link>

        <Link to="/dishes/example-2" className="dish-card">
          <div className="dish-image">
            <div className="no-image">Image</div>
          </div>
          <div className="dish-info">
            <h3>Caprese Salad</h3>
            <p className="dish-category">Starters</p>
            <p className="dish-chef">by Mario Rossi</p>
            <div className="dish-footer">
              <span className="dish-price">90,000 ₫</span>
              <span className="dish-rating">★★★★☆ 4.5</span>
            </div>
          </div>
        </Link>
      </div>

      <p className="no-results hint">
        Static UI template: swap hard-coded dishes and filters for dynamic data later.
      </p>
    </div>
  );
}
