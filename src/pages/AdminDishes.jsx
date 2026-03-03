export default function AdminDishes() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Manage Dishes</h1>
        <button className="btn-primary">
          + Add Dish
        </button>
      </div>

      <form className="admin-form">
        <h2>Create / Edit Dish</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input name="title" placeholder="e.g. Grilled Pork with Vermicelli" />
          </div>
          <div className="form-group">
            <label>Price (VND)</label>
            <input name="price" type="number" min="0" placeholder="120000" />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Describe the dish, flavour profile, and serving style"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select name="category" defaultValue="">
              <option value="">Select category</option>
              <option value="signature">Signature</option>
              <option value="starters">Starters</option>
              <option value="mains">Mains</option>
            </select>
          </div>
          <div className="form-group">
            <label>Chef</label>
            <select name="chef" defaultValue="">
              <option value="">Select chef</option>
              <option value="linh">Linh Nguyen (Head Chef)</option>
              <option value="mario">Mario Rossi (Sous Chef)</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rating (0-5)</label>
            <input name="rating" type="number" min="0" max="5" step="0.1" placeholder="4.5" />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" name="is_signature" />
              Signature Dish
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input type="file" name="image" accept="image/*" />
        </div>

        <div className="form-group">
          <label>Ingredients</label>
          <div className="checkbox-list">
            <label className="checkbox-item">
              <input type="checkbox" /> Lemongrass
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Fresh Basil
            </label>
            <label className="checkbox-item">
              <input type="checkbox" /> Bird&apos;s Eye Chili
            </label>
          </div>
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
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Chef</th>
            <th>Rating</th>
            <th>Signature</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="no-img-small">-</span>
            </td>
            <td>Grilled Pork with Vermicelli</td>
            <td>120,000 ₫</td>
            <td>Signature</td>
            <td>Linh Nguyen</td>
            <td>4.8</td>
            <td>Yes</td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <span className="no-img-small">-</span>
            </td>
            <td>Caprese Salad</td>
            <td>90,000 ₫</td>
            <td>Starters</td>
            <td>Mario Rossi</td>
            <td>4.5</td>
            <td>No</td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="no-results hint">
        This is a static UI template. Replace the sample rows and wire the form
        up to your data layer as an exercise.
      </p>
    </div>
  );
}
