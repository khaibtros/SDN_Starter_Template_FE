export default function Categories() {
  return (
    <div className="page">
      <h1>Categories</h1>
      <div className="cards-grid">
        <div className="info-card">
          <h3>Signature</h3>
          <p>Chef-recommended signatures that define our restaurant.</p>
        </div>
        <div className="info-card">
          <h3>Starters</h3>
          <p>Light bites to begin your meal.</p>
        </div>
        <div className="info-card">
          <h3>Mains</h3>
          <p>Hearty main dishes from around the world.</p>
        </div>
      </div>
      <p className="no-results hint">
        Static UI template: replace these cards with dynamic data once your API layer is ready.
      </p>
    </div>
  );
}
