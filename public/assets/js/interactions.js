$(document).ready(function () {

  

    $("#add-interactions").on("click", function () {
        var interactionsObj = {
            voterId: $("#voterId").val().trim(),
            knock: $('input[name=knock]:checked').val(),
            handOutLit:$('input[name=literature]:checked').val(),
            signPetition: $('input[name=petition]:checked').val(),
            email: $("#extraEmail").val().trim(),
            phone: $("#extraPhone").val().trim(),    
            firstName: $("#firstName").val().trim(),
            lastName: $("#lastName").val().trim()  
        }

        $.post("/api/interactions", interactionsObj, function (data) {
            console.log("add interactions successful", data);
        });

    });




});


