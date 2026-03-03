export default function AdminChefs() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Manage Chefs</h1>
        <button className="btn-primary">
          + Add Chef
        </button>
      </div>

      <form className="admin-form">
        <h2>Create / Edit Chef</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input name="fullname" placeholder="e.g. Linh Nguyen" />
          </div>
          <div className="form-group">
            <label>Rank</label>
            <input name="rank" placeholder="e.g. Head Chef" />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Short bio, specialties, and cooking style"
          />
        </div>

        <div className="form-group">
          <label>Nationality</label>
          <input name="nationality" placeholder="e.g. Vietnam" />
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
            <th>Full Name</th>
            <th>Rank</th>
            <th>Nationality</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linh Nguyen</td>
            <td><span className="chef-rank">Head Chef</span></td>
            <td>Vietnam</td>
            <td className="desc-cell">
              Specializes in modern Vietnamese cuisine with French techniques.
            </td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Mario Rossi</td>
            <td><span className="chef-rank">Sous Chef</span></td>
            <td>Italy</td>
            <td className="desc-cell">
              Passionate about handmade pasta and slow-cooked sauces.
            </td>
            <td className="action-btns">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="no-results hint">
        This is a static UI template. Hook it up to your data layer and role
        permissions as an exercise.
      </p>
    </div>
  );
}
