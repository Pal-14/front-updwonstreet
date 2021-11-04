import axios from "axios";

const baseURL =  "https://projet-back.osc-fr1.scalingo.io/" || "http://localhost:5000";

const base = axios.create({
  baseURL,
});
const Service = {
  addUsers(body) {
    return base.post ('/users/signUp', body) 
  },

  logUsers(body) {
    return base.post ('/users/login', body)
  },

  checkToken() {
    let jwt = localStorage.getItem("jwt"); // Récupération du token de connexion
    return base.get ('/users/checkToken', { headers:{
      Authorization: `Bearer ${jwt}`}
    })
  },

  adminUserList() {
    let jwt = localStorage.getItem("jwt");
    return base.get ('/users', { headers:{
      Authorization: `Bearer ${jwt}`}
    })
  },

  editUser (body) {
    let jwt = localStorage.getItem("jwt");
    return base.put ('/users/editUser', body, {headers :{
      Authorization: `Bearer ${jwt}`}
    })
  },
  editUserCoin (body) {
    let jwt = localStorage.getItem("jwt"); 
    return base.put ('/users/editUserCoin', body, {headers : {
      Authorization: `Bearer ${jwt}`}
    })
  },
  filesProof (formData) {
    let jwt = localStorage.getItem("jwt"); 
    return base.post ('/users/filesProof', formData, {headers : {
      Authorization: `Bearer ${jwt}`,
      "Content-Type" : "multipart/form-data"
    }
    })
  },
  
};

export default Service;
// Rien à voir, circulez
// Vraiment rien à voir, promis.
// Bon ...
if (process.env.NODE_ENV === "development") {
  // Intercepte chaque requête du frontend pour faire un joli log
  base.interceptors.request.use(
    (request) => {
      let { baseURL, method, url } = request;
      console.log(
        `SENDING [${method.toUpperCase()}] FROM FRONTEND : ${baseURL}${url}`
      );
      return request;
    },
    (err) => err
  );

  // Intercepte chaque réponse du backend pour faire un joli log
  base.interceptors.response.use(
    (response) => {
      let { config, data, status, statusText } = response;
      let { method } = config;
      console.log("");
      console.log("\\\\\\\\");
      console.log(
        `RECEIVED [${method.toUpperCase()}] RESPONSE FROM BACKEND : ${
          config.baseURL
        }${config.url}`
      );
      console.log(
        `Data of type : ${typeof data} | status ${status} ${statusText}`
      );
      console.log("\\\\\\\\");
      console.log("");
      return response;
    },
    (err) => {
      let { config, data, status, statusText } = err.response;
      let { method } = config;
      console.log("");
      console.log("\\\\\\\\");
      console.log(
        `RECEIVED [${method.toUpperCase()}] RESPONSE FROM BACKEND : ${
          config.baseURL
        }${config.url}`
      );
      console.log(
        `Data of type : ${typeof data} | status ${status} ${statusText}`
      );
      console.log("\\\\\\\\");
      console.log("");
      return err.response;
    }
  );
}
