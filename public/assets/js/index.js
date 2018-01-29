$(document).ready(function() {

  // Filter Menu 

  $('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
    var filterMenu = $('#filter-menu-icon');
    if (filterMenu.attr("class") == "glyphicon glyphicon-menu-right") {
      filterMenu.attr("class", "glyphicon glyphicon-menu-left");
    }else {
      filterMenu.attr("class", "glyphicon glyphicon-menu-right");
    }   
  });


  

  // Filter Menu


});




