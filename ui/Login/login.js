
username = document.getElementsByName("username");
password = document.getElementsByName("password");

function getUserCredentials(){
    username = document.getElementById("username");
    password = document.getElementById("password");
    console.log("Username: ",username.value);
    console.log("Password: ",password.value);
    console.log("test");
    console.log("asdf")
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/';
    fetch(apiUrl).then(response => {
    return response.json();
    }).then(data => {
    // Work with JSON data here
    console.log(data);
    }).catch(err => {
    // Do something for an error here
    });
}