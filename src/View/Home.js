import "../App.css";
/* import logo from "../img/city-4235697_960_720.jpg"; */
import appt1 from "../img/appt1.jpg";
import appt2 from "../img/appt2.jpeg";

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
            <img class="activator" src={appt1} />
          </div>
          <div class="card-contentHome">
            <span class="card-title activator grey-text text-darken-4">
              Le Bastion
            </span>
            <p>
            <a className="rouge">Voir le bien</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Le Bastion<i class="material-icons right">close</i>
            </span>
            <p>
              Petite résidence "Le Bastion", de 4 étages. Au centre d'Antibes.
              Infrastructures de la maison: ascenseur. Magasins 400 m, magasin
              d'alimentation 110 m, restaurant 130 m, bar 100 m, boulangerie 110
              m, café, arrêt du bus 100 m, gare ferroviaire 1 km, plage de sable
              350 m. Marina 2 km. Attractions à proximité: Marineland 5 km,
              Vieil Antibes 250 m, Cannes 10 km.
            </p>
          </div>
        </div>
        <div class="card cardHome">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={appt2} />
          </div>
          <div class="card-contentHome">
            <span class="card-title activator grey-text text-darken-4">
              Centre Antibes
            </span>
            <p>
              <a  className="rouge">Voir le bien</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Centre Antibes<i class="material-icons right">close</i>
            </span>
            <p>
              Antibes est une petite ville sur la Côte d'Azur avec des bâtiments
              modernes et anciens datant d'origines anciennes. L'appartement
              donnera une expérience authentique. L'aménagement intérieur et
              l'ouverture sur la terrasse créent une quantité plus qu'ample
              d'hébergement avec suffisamment d'espace isolé à l'intérieur. La
              vue est sur la rue principale menant à un paysage pittoresque en
              bord de mer. Il est entouré de restaurants, bars, marchés,
              transports, plage et Old City, la partie la plus ancienne de la
              ville.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
