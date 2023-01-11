$(".btnProgress").click(function(event) {

    $.ajax ({
        //sets the target, gives data about the request as query selector
        url: "progressLog.json",
        type: "GET",
        data: { page: window.location.href },
        dataType: "json",
        success: function(response) {
            if (response[window.location.href] !== undefined) {
                var list = response[window.location.href];
                if (list !== undefined && list.length) {
                    var listItems = "";
                    
                    // lists each entry one at a time and spaces them
                    for (var i = 0; i < list.length; i++) {
                        listItems += list[i] + "\n";
                    }
                    // prints the list of all items to alert box
                    alert(listItems);
                }
            }
        },

        error: function(error) {
            console.log("Error: " + error);
        }
    });
});