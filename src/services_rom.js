const serverURL = "http://localhost:5000"

export function put(path, body){
    let token = localStorage.getItem("token")
    return fetch(`${serverURL}${path}`, {
        method: "PUT",
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-type":"application/json"},
        body: JSON.stringify(body)
    }).then((res)=> res.json());
}

export function putCoins(body) {
    let token = localStorage.getItem("token");
    let myBody = JSON.stringify(body);
    let myHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
    return fetch("http://localhost:5000/users/edit-user-coin", {
      method: "PUT",
      headers: myHeaders,
      body:myBody
    }).then((response) => response.json());
  }
  