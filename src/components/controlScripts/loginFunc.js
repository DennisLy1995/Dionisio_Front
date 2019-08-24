let actionController = new ActionsController();

var a = document.getElementById("buttonLogin");
a.addEventListener("click", loginTemp());


 function loginTemp() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        alert("User name: " + username + " Password: " + password);

        let URL = actionController.URL_API + "/AllAccounts";
        let accounts = actionController.GetToAPI(URL);

};

$( document ).ready(function() {
    alert( "ready!" );
});
