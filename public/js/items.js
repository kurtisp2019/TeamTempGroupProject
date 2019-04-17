$(document).ready(function() {

    $(document).on("submit", "#itemForm", function() {
        event.preventDefault();

        $.ajax({
            method: "POST",
            url: "/api/AddStoreItem/",
            data: {
                name: $("#name").val().trim(),
                description: $("#description").val().trim(),
                price: $("#price").val().trim(),
                quantity: $("#quantity").val().trim(),
                image: $("#image").val().trim()
            }
        }).then(function (_response) {
    
            console.log(_response);
        });
    });
});