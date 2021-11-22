import "../App.css";
/* import logo from "../img/city-4235697_960_720.jpg"; */
import laune from "../img/laune.jpg";
import photo from "../img/photo.png";

function Home() {
  return (
    <div className="Home">
      <div className="containHome">
        <div className="boxHome">
          <div className="imageHome" />
          <input
            name="email"
            className="homeEmail"
            placeholder="Newsletter"
          ></input>
          <p className="homeP">
            Pour tout savoir de nos nouveaux services et biens
          </p>
        </div>
      </div>
      <div className="best">
        <div class="card cardHome">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator cardBien" src={laune} alt="" />
          </div>
          <div class="card-contentHome">
            <span class="card-title activator grey-text text-darken-4">
              Région de Nantes
            </span>
            <p>
              <a className="rouge">Voir le bien</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Maison Parisienne<i class="material-icons right">close</i>
            </span>
            <p>
              Petite résidence de 4 étages. Au centre de Paris. Infrastructures
              de la maison: ascenseur. Magasins 400 m, magasin d'alimentation
              110 m, restaurant 130 m, bar 100 m, boulangerie 110 m, café, arrêt
              du bus 100 m, gare ferroviaire 1 km, plage de sable 350 m.
              Attractions à proximité: Disneyland 15 km, Vieil Antibes 250 m,
              Cannes 10 km.
            </p>
          </div>
        </div>
        <div class="card cardHome">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="image" class="activator cardBien" src={photo} />
          </div>
          <div class="card-contentHome">
            <span class="card-title activator grey-text text-darken-4">
              Villa à 5mn de Tours
            </span>
            <p>
              <a className="rouge">Voir le bien</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Tours <i class="material-icons right">close</i>
            </span>
            <p>
              Situé à 5 minutes de Tours venez découvrir cette charmante petite
              Villa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
