import { Link } from 'react-router-dom';

export default function DishDetail() {
  const dish = {
    title: 'Grilled Pork with Vermicelli',
    price: '120,000 ₫',
    description:
      'Charcoal-grilled pork served with rice vermicelli, fresh herbs, and dipping sauce.',
    is_signature: true,
    rating: 4.8,
    category: {
      name: 'Signature',
      description: 'Chef-recommended signatures that define our restaurant.',
    },
    chef: {
      fullname: 'Linh Nguyen',
      rank: 'Head Chef',
      nationality: 'Vietnam',
    },
    ingredients: [
      {
        _id: 'ing-lemongrass',
        name: 'Lemongrass',
        description: 'Fragrant stalk with citrusy notes.',
        origin: 'Central Vietnam',
      },
      {
        _id: 'ing-chili',
        name: 'Bird\'s Eye Chili',
        description: 'Small but very spicy chili, used to add heat.',
        origin: 'Southeast Asia',
      },
    ],
  };

  return (
    <div className="dish-detail-page">
      <Link to="/" className="back-link">&larr; Back to Menu</Link>
      <div className="dish-detail">
        <div className="dish-detail-image">
          <div className="no-image large">Image</div>
        </div>
        <div className="dish-detail-info">
          <div className="dish-detail-header">
            <h1>{dish.title}</h1>
            {dish.is_signature && <span className="badge-signature">Signature Dish</span>}
          </div>
          <p className="dish-detail-price">{dish.price}</p>
          <div className="dish-detail-rating">
            <span className="stars">★★★★☆</span>
            <span>{dish.rating} / 5</span>
          </div>
          <p className="dish-detail-desc">{dish.description}</p>

          <div className="dish-detail-meta">
            <div className="meta-section">
              <h3>Category</h3>
              <p>{dish.category?.name}</p>
              <p className="meta-desc">{dish.category?.description}</p>
            </div>
            <div className="meta-section">
              <h3>Chef</h3>
              <p>{dish.chef?.fullname} — {dish.chef?.rank}</p>
              <p className="meta-desc">{dish.chef?.nationality}</p>
            </div>
          </div>

          <div className="dish-detail-ingredients">
            <h3>Ingredients</h3>
            <ul>
              {dish.ingredients.map((ing) => (
                <li key={ing._id}>
                  <strong>{ing.name}</strong> — {ing.description}
                  <span className="ingredient-origin">({ing.origin})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="no-results hint">
        Static UI template: use the URL param and fetch a real dish later.
      </p>
    </div>
  );
}
