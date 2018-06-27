window.onload = function() {  
    function processForm(e) {
        e.preventDefault();
    // prevent default form behavior, which would   
    // refresh the page after the form is submitted    e.preventDefault();
    var data = document.getElementById("input").value; 
    var temp = {};
    temp["color"] = data;
       if (data == ""){
        alert('There has been an error!');
       } else {    
    console.log(temp);
       }
    }  
 var form = document.getElementById("my-form");  
 form.addEventListener("submit", processForm);
}
