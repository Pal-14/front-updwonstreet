import axios from "axios";

const baseURL = /* "https://projet-back.osc-fr1.scalingo.io/" ||   "https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/" || */ "http://localhost:5000";

const base = axios.create({
  baseURL,
});
const Service = {
  addUsers(body) {
    return base.post ('/users/signup', body) 
  },

  logUsers(body) {
    return base.post ('/users/login', body)
  },

  checkToken() {
    let jwt = localStorage.getItem("jwt"); // Récupération du token de connexion
    return base.get ('/users/check-token', { headers:{
      Authorization: `Bearer ${jwt}`}
    })
  },

  adminUserList() { /* NOW YOU REALLY NEED AN ADMIN TOKEN TO GO THERE */
    let jwt = localStorage.getItem("jwt");
    return base.get ('/users/admin-listing', { headers:{
      Authorization: `Bearer ${jwt}`}
    })
  },

  editUser (body) {
    let jwt = localStorage.getItem("jwt"); /* CHANGED PATH EDIT-USER INTO THE ONE BELOW */
    return base.put ('/users/request-verified-status', body, {headers :{
      Authorization: `Bearer ${jwt}`}
    })
  },
  editUserCoin (body) {
    let jwt = localStorage.getItem("jwt"); 
    return base.put ('/users/edit-user-coin', body, {headers : {
      Authorization: `Bearer ${jwt}`}
    })
  },

  editUserStatus(body) {
    let jwt = localStorage.getItem("jwt"); /* CHANGED PATH NAME BUT SHOULD BE FINE */
    return base.put ('/users/edit-user-by-admin', body, {headers : {
      Authorization: `Bearer ${jwt}`}
    }) 
  },

  filesProof (formData) {
    let jwt = localStorage.getItem("jwt"); /* CHANGED PATH NAME BUT SHOULD BE FINE */
    return base.post ('/users/upload-private-document', formData, {headers : {
      Authorization: `Bearer ${jwt}`,
      "Content-Type" : "multipart/form-data",
    }
    })
  },

  addItemPics (formData) {
    let jwt = localStorage.getItem("jwt"); /* CHANGED PATH NAME BUT SHOULD BE FINE */
    return base.post ('/items/upload-public-doc', formData, {headers : {
      Authorization: `Bearer ${jwt}`,
      "Content-Type" : "multipart/form-data",
    }
    })
    
  },

  adminItemList() {
    let jwt = localStorage.getItem("jwt"); /* CHANGED PATH NAME BUT SHOULD BE FINE */
    return base.get ('/items/admin-listing', { headers:{
      Authorization: `Bearer ${jwt}`}
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
