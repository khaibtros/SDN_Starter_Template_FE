export default function Chefs() {
  return (
    <div className="page">
      <h1>Our Chefs</h1>
      <div className="cards-grid">
        <div className="info-card chef-card">
          <h3>Linh Nguyen</h3>
          <span className="chef-rank">Head Chef</span>
          <p>Specializes in modern Vietnamese cuisine with French techniques.</p>
          <span className="chef-nationality">Vietnam</span>
        </div>
        <div className="info-card chef-card">
          <h3>Mario Rossi</h3>
          <span className="chef-rank">Sous Chef</span>
          <p>Passionate about handmade pasta and slow-cooked sauces.</p>
          <span className="chef-nationality">Italy</span>
        </div>
      </div>
      <p className="no-results hint">
        Static UI template: hook this page up to your real or mock chef list later.
      </p>
    </div>
  );
}
