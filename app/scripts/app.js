$(function(){

    $.get("http://pm25.in/api/querys/pm2_5.json?city=chengdu&token=FydAKx5y1BBbqXeLcxyi", function(result, statusText, jqXHR){
        
        console.log(result);

        var summary = result[result.length-1];

        console.log(summary);

        $("#area").append(template($("#tpl_summary").html(), summary));

        for(var i=0; i<result.length-1; i++){

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