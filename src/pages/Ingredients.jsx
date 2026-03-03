export default function Ingredients() {
  return (
    <div className="page">
      <h1>Ingredients</h1>
      <div className="cards-grid">
        <div className="info-card">
          <h3>Lemongrass</h3>
          <p>Fragrant stalk with citrusy notes, perfect for marinades and broths.</p>
          <span className="ingredient-origin">Origin: Central Vietnam</span>
        </div>
        <div className="info-card">
          <h3>Fresh Basil</h3>
          <p>Sweet and aromatic leaves used in salads and pastas.</p>
          <span className="ingredient-origin">Origin: Italy</span>
        </div>
        <div className="info-card">
          <h3>Bird&apos;s Eye Chili</h3>
          <p>Small but very spicy chili, used to add heat.</p>
          <span className="ingredient-origin">Origin: Southeast Asia</span>
        </div>
      </div>
      <p className="no-results hint">
        Static UI template: swap these cards for dynamic ingredient data later.
      </p>
    </div>
  );
}
