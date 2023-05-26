import "./AddImprovementDialog.css";

const AddImprovementDialog = () => {
  return (
    <section className="AddImprovementDialog">
      <h2>Add Improvements</h2>
      <form className="form">
        <label htmlFor="type">Type:</label>
        <select id="type" className="input-selector">
          <option value="house">House</option>
          <option value="well">Well</option>
          <option value="grainz">Grainz Farm</option>
          <option value="brainz">Brainz farm</option>
        </select>
      </form>
      <div className="benefit">
        <p className="benefit-label">Benefit:</p>
        <p>5 people</p>
      </div>
      <div className="cost">
        <p className="cost-label">Cost:</p>
        <div>
          <p>5 Lumber</p>
          <p>5 water</p>
          <p>5 grain</p>
          <p>1 sheep</p>
        </div>
      </div>
      <div className="addImprovementButtons">
        <button className="add-button">Add</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </section>
  );
};

export default AddImprovementDialog;
