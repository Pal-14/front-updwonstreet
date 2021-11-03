import "./AdminLog.css";

function AdminLog() {

    /* Affichage front */
    return (
        <div>
            <h2>Connexion</h2>
            <input type="text" name="email" placeholder="Adresse e-mail"></input>
            <br />
            <input type="password" name="password" placeholder="Mot de passe"></input>
            <br />
            <button>Se connecter</button>
            <br />
            <p>Créer un compte administrateur</p>
        </div>
    )
};

export default AdminLog;