// Saves options to localStorage.
// localStorage["favorite_color"] = color;
//var favorite = localStorage["favorite_color"];

function load_citys() {

  $.get("http://www.pm25.in/api/querys.json?token=FydAKx5y1BBbqXeLcxyi", 
    function(result, statusText, jqXHR){

      for(var i=0; i<result['cities'].length; i++){
        var city = result['cities'][i];
        $("#citys").append("<option value='"+city+"'>"+city+"</option>")
      }

    });

}

$(function(){

  load_citys();

  $("#save").click(function(){

    localStorage['current_city'] = $("#citys").val();

  });

});
