import "../App.css";

function Home() {
  return (
    <div className="containHome">
      <div className="boxHome">
        <div className="imageHome"/>
        <input
          name="email"
          className="homeEmail"
          placeholder="News letter"
        ></input>
        <p className="homeP">
          Pour tout savoir de nos nouveaux services et biens
        </p>
      </div>
    </div>
  );
}

export default Home;
