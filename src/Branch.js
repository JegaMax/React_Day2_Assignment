function Branch(props) {
  function ButtonClicked() {
    alert("You are Clicked " + props.title);
  }
  const departments = props.subBranches;
  const listItems = departments.map((department) => (
    <li className="dept-list">{department}</li>
  ));
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.image} className="card-image" alt="We are Engineers" />
      </div>
      <h1 className="card-title">{props.title}</h1>
      <p className="card-desc">{props.desc}</p>
      <h3>{props.subTitle}</h3>
      <ul className="Depts">{listItems}</ul>
      <p className="btn-parent">
        <button className="card-btn" onClick={ButtonClicked}>
          For More Info
        </button>
      </p>
    </div>
  );
}

export default Branch;
