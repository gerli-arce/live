form_login.onsubmit = async (e)=>{
  e.preventDefault();
  
    let request = {};
    request.username = user.value;
    request.password = password.value;

    let response = await fn_login(request);
    console.log(response)
    if(response.status = "200"){
        let responsejson = await response.json()
        location.href = "home"
    }else{
      if(response){
        let responsetext = await response.json();

        console.log(responsetext)
      }else{
        alert('fallo la operacion')
      }
    }
}

async function fn_login(data) {
    var URL = "api/session/login";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var responseLogin = await fetch(URL, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response;

      })
      .catch((error) => {
        return error;
      });
  
    return responseLogin;
  }
  