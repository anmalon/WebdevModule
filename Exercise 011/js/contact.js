// initialising variables
let input

window.onload = function() {
    var div = document.getElementById('contact-form');
    div.style.top = '100';
}

document.getElementById("btnSubmit").addEventListener("click", function()
{  
    input = document.getElementById("firstName").value;
    sessionStorage.setItem("firstName", input);
    input = document.getElementById("surName").value;
    sessionStorage.setItem("surName", input);
    input = document.getElementById("address").value;
    sessionStorage.setItem("address", input);
    input = document.getElementById("mobile").value;
    sessionStorage.setItem("mobile", input);
    input = document.getElementById("email").value;
    sessionStorage.setItem("email", input);
});

document.getElementById("btnTest").addEventListener("click", function()
{  
    var getFirstName = sessionStorage.getItem("firstName");
    var getSurName = sessionStorage.getItem("surName");
    var getAddress = sessionStorage.getItem("address");
    var getMobile = sessionStorage.getItem("mobile");
    var getEmail = sessionStorage.getItem("email");

    alert(`First Name: ${getFirstName} \nSurname: ${getSurName} \nAddress: ${getAddress} \nMobile Number: ${getMobile} \nEmail: ${getEmail}`);
});