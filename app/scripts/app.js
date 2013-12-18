$(function(){

    if(!localStorage['current_city']){
        localStorage['current_city'] = '成都';
    }

    $.get("http://pm25.in/api/querys/pm2_5.json?city="+localStorage['current_city']+"&token=FydAKx5y1BBbqXeLcxyi", function(result, statusText, jqXHR){
        
        console.log(result);

        var summary = result[result.length-1];
        summary.time_point = summary.time_point.substr(11,5)

        $("#area").append(template($("#tpl_summary").html(), summary));

        for(var i=0; i<result.length-1; i++){

            var item = result[i];
            item.time_point = item.time_point.substr(11,5)
            var tpl = template($("#tpl_pm25_item").html(), item);
            $("#positions").append(tpl);

        }

    });


    function template(tpl, object){

        for(var key in object){
            var obj = object[key];
            tpl = tpl.replace('{'+key+'}', obj);
        }
        return tpl;

    }

});