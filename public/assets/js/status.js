// Filter Menu 

//$(document).ready(function() {
	//var source = $("#hb-voterhistory-template").html();
	//var template = Handlebars.compile(source);
	//$.get('http://localhost:8080/voterHistory/101051794', function(data){
		//var voter = data[0];
		//var html = template(voter);
		//$('#voterDiv').html(html);
	//});
//});

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


