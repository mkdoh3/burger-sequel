$(function () {
    $(".eat-it").on('click', function (e) {
        let burgerId = $(this).data("id");
        let id = {
            id: burgerId
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(function () {
            location.reload();
        });
    });


    // probs needs some validation to restrict length

    $(".submit-burger").on('click', function (e) {
        let newBurger = {
            burger_name: $("#burgerText").val()
        };

        $.ajax("api/burgers/", {
            type: "POST",
            data: newBurger
        });

    });

    $(".forget-it").on('click', function (e) {
        let id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        });
    })

});
