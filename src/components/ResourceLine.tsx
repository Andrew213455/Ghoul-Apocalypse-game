import "./ResourceLine.css";

const ResourceLine = () => {
  return (
    <div className="ResourceLine">
      <div className="default">
        <div className="title-logo">
          <h3>Lumber</h3>
          <i className="fa-solid fa-tree"></i>
        </div>
        <p>0</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Grain</h3>
          <i className="fa-solid fa-wheat-awn"></i>
        </div>
        <p>0</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Water</h3>
          <i className="fa-solid fa-droplet"></i>
        </div>
        <p>0</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Brainz</h3>
          <i className="fa-solid fa-brain"></i>
        </div>
        <p>0</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>people</h3>
          <i className="fa-solid fa-person"></i>
        </div>
        <p>0</p>
      </div>
    </div>
  );
};

export default ResourceLine;
