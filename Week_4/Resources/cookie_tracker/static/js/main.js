$(document).ready(function() {
     function processForm(e) {
         e.preventDefault();
    var form_name=$("#input").val();
    var form_selector=$("#select option:selected").text();
    console.log("heloo");
    console.log(form_name);
    console.log(form_selector);
    var cookie = {"name": form_name, "rate": form_selector};
    //var cooke={"name":"", "rate": form_selector};
    console.log(cookie);
    
   
    $.ajax({  type: "POST",  
    url: "/cookies",  
    data: cookie, 
     success: function(data) {   
        console.log(data); 

       },  
       
    //  failed: function(data,status){
    //      console.log(data);
    //  },
        dataType: "json"});   
 }
var form = $("#form");  
form.submit( processForm);
 });



