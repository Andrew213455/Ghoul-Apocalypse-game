import "./EditImprovementDialog.css";

const EditImprovementDialog = () => {
  return (
    <section className="EditImprovementDialog">
      <div className="edit-title">
        <h2>Edit Improvements</h2>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Type:</p>
        <p>House</p>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Level:</p>
        <p>1</p>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Benefit:</p>
        <p>5 people</p>
      </div>
      <div className="edit-improvements">
        <p className="edit-label">Cost:</p>
        <div className="edit-cost">
          <p className="edit-box">5 Lumber</p>
          <p>5 Water</p>
          <p className="edit-box">5 Grain</p>
          <p>1 Sheep</p>
        </div>
      </div>
      <div className="edit-button-container">
        <button className="edit-button">Upgrade</button>
        <button className="edit-button">Downgrade</button>
        <button className="edit-button">Remove</button>
        <button className="edit-button">Close</button>
      </div>
    </section>
  );
};

export default EditImprovementDialog;
