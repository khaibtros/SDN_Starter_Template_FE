// UI-only starter template for the Categories admin page.
// Intentionally contains no data fetching or mutation logic.

export default function AdminCategories() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Manage Categories</h1>
        <button className="btn-primary">
          + Add Category
        </button>
      </div>

      <form className="admin-form">
        <h2>Create / Edit Category</h2>

        <div className="form-group">
          <label>Name</label>
          <input name="name" placeholder="e.g. Starters" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Short description of what belongs to this category"
          />
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Signature</td>
            <td className="desc-cell">
              Chef-recommended signatures that define our restaurant.
            </td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Starters</td>
            <td className="desc-cell">
              Light bites to begin your meal.
            </td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="no-results hint">
        This is a static UI template. Wire these controls to your data layer
        (mock APIs or real backend) as an exercise.
      </p>
    </div>
  );
}
