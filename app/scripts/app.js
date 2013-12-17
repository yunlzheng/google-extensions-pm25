$(function(){

    $.get("http://www.pm25.in/api/querys/pm2_5.json?city=chengdu&token=FydAKx5y1BBbqXeLcxyi", function(result, statusText, jqXHR){
 
        for(var i=0; i<result.length; i++){

            var tpl = template($("#tpl_pm25_item").html(), result[i]);
            $("#positions").append(tpl);

        }

    });


    function template(tpl, object){

        for(var key in object){
            tpl = tpl.replace('{'+key+'}', object[key]);
        }
        return tpl;

    }

});