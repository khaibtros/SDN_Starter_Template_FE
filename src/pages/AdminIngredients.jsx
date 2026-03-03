export default function AdminIngredients() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Manage Ingredients</h1>
        <button className="btn-primary">
          + Add Ingredient
        </button>
      </div>

      <form className="admin-form">
        <h2>Create / Edit Ingredient</h2>

        <div className="form-group">
          <label>Name</label>
          <input name="name" placeholder="e.g. Lemongrass" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Describe flavour, use cases, and characteristics"
          />
        </div>

        <div className="form-group">
          <label>Origin</label>
          <input name="origin" placeholder="e.g. Central Vietnam" />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-primary">
            Save
          </button>
          <button type="button" className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Origin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lemongrass</td>
            <td className="desc-cell">
              Fragrant stalk with citrusy notes, perfect for marinades and broths.
            </td>
            <td>Central Vietnam</td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Fresh Basil</td>
            <td className="desc-cell">
              Sweet and aromatic leaves used in salads and pastas.
            </td>
            <td>Italy</td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="no-results hint">
        This is a static UI template. Connect it to your mock or real data layer as an exercise.
      </p>
    </div>
  );
}
