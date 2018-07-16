window.onload = function() {  
    function processForm(e) {
        e.preventDefault();
    // prevent default form behavior, which would   
    // refresh the page after the form is submitted    e.preventDefault();
    var data = $("#input").val(); 
    var temp = {};
    temp["color"] = data;
       if (data == ""){
        alert('There has been an error!');
       }
        else { 

    console.log(temp);
            
    $.get("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data, status){
           
        console.log(data.query.results.channel.item.condition.text);

        var weather = console.log(data.query.results.channel.item.condition.text["Sunny"]);
        if (console.log(temp)==weather){
            alert('a good day today');
        }
             
           
            });
        }
      
    
    }  
 var form = $("#my-form");  
 form.submit( processForm);
}
