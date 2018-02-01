$(document).ready(function() {

  
  // Filter - populate state drop down
  $.get("/api/states", function (data) {
        console.log("Clientside /api/states", data);

      $('#state').append($('<option>', { 
          value: "",
          text : ""
      }));

        $.each(data, function (i, item) {
          console.log(item);
          if (item.toUpperCase().trim() == "NJ") {
            $('#state').append($('<option>', { 
              value: item,
              text : item
            }));
          }else {
            $('#state').append($('<option>', { 
              value: item,
              text : item
            }));
          }
      });
     
    });




  });
 

