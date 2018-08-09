

document.addEventListener('DOMContentLoaded', function(event) {
    let clicks = 0;  
    const div1 = document.getElementById('div1');
    div1.addEventListener('click', function() {
        clicks++;
        div1.innerHTML = 'Clicked! ' + clicks + ' times!';
        if (clicks >= 10){
            div1.innerHTML = 'Clicked! ' + clicks + ' wow!';
        }
        if (clicks >= 50){
            div1.innerHTML = 'STOP! ' + clicks + ' you need help!';
        }
    });  
})
 