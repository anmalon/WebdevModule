// initialising variables
let input
const btnSet = document.getElementById("btnSubmit");
const btnGet = document.getElementById("btnRetrieve");

btnGet.disabled = true;

document.getElementById("btnSubmit").addEventListener("click", function(event)
{  
    
    // Validating inputs in JS
    input = document.getElementById("firstName").value;
    if (input === "null" || input === "") {
        alert("First name must be entered.");
        return false;
    }
    else {
        sessionStorage.setItem("firstName", input);
    }

    input = document.getElementById("surName").value;
    if (input === "null" || input === "") {
        alert("Surname must be entered.");
        return false;
    }
    else {
        sessionStorage.setItem("surName", input);
    }

    input = document.getElementById("surName").value;
    if (input === "null" || input === "") {
        alert("Address must be entered.");
        return false;
    }
    else {
        sessionStorage.setItem("address", input);
    }

    input = document.getElementById("mobile").value;
    if (input === "null" || input === "") {
        alert("Mobile number must be entered.");
        return false;
    }
    else {
        sessionStorage.setItem("mobile", input);
    }
    
    input = document.getElementById("email").value;
    if (input === "null" || input === "" || input.indexOf("@") === -1) {
        alert("A valid email address must be provided.");
        return false;
    }
    else {
        sessionStorage.setItem("email", input);
    }

    // Enabling the retrieval button only after all validation is passed
    btnGet.disabled = false;
    
});


document.getElementById("btnRetrieve").addEventListener("click", function()
{  
    // returning the values set earlier
    var getFirstName = sessionStorage.getItem("firstName");
    var getSurName = sessionStorage.getItem("surName");
    var getAddress = sessionStorage.getItem("address");
    var getMobile = sessionStorage.getItem("mobile");
    var getEmail = sessionStorage.getItem("email");

    alert(`First Name: ${getFirstName} \nSurname: ${getSurName} \nAddress: ${getAddress} \nMobile Number: ${getMobile} \nEmail: ${getEmail}`);
});


// NOT WORKING - Couldn't figure out how to get it to work in time
// const worker = new Worker("worker.js");

// document.querySelectorAll('input[type="text"]').forEach(input => {
//     input.addEventListener('input', () => {
//         worker.postMessage("start");
//     });
// });

// document.getElementById("btnSubmit").addEventListener("click", function() {
//     worker.postMessage("stop");
// });

// worker.onmessage= function(e) {
//     if (e.data === "timeout") {
//         document.querySelectorAll('input[type="text"]').forEach(input => {
//         input.value = ""
//         });
//     }
// };