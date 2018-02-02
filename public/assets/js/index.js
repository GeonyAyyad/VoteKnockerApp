$(document).ready(function() {

  
  // Filter - populate state drop down
  $.get("/api/states", function (data) {

      $('#state').append($('<option>', { 
          value: "",
          text : ""
      }));

        $.each(data, function (i, item) {
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
 

