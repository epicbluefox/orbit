window.onload = function () {
    function processForm(e) {
        e.preventDefault();
        

        var data = $("#city option:selected").text();
        var temp = {};
        temp["weather"] = data; // New York, NY
        // lower case
        var str = data.split(', ');
        var city = str[0].toLowerCase();
        var state = str[1].toLowerCase();
        console.log(city);
        console.log(state);
        
        var empty = "";
        empty += "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
        empty += city;
        empty += "%2C%20";
        empty += state;
        empty += "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        $.get(empty, function (data) {
            console.log(data.query.results.channel.item.condition.text);
            console.log(data.query.results.channel.item.condition);
            document.getElementById("wat").innerHTML = data.query.results.channel.item.condition.date;
            document.getElementById("yell").innerHTML ="Temp: " + data.query.results.channel.item.condition.temp;
            document.getElementById("helo").innerHTML = data.query.results.channel.item.condition.text;
            var weather = data.query.results.channel.item.condition.text;
            
            if (weather === "Partly Cloudy") {
                $("#body").css("background-color", "#E5E8E8");
              
                
            }
            else if (weather === "Sunny") {
                $("#body").css("background-color", "lightyellow");
               
                
            }
            else if (weather === "Windy") {
                $("#body").css("background-color", "#95A5A6");
            
            }
            else if (weather === "Mostly Sunny") {
                $("#body").css("background-color", " #FAD7A0");
            
            }
            else if (weather === "Cloudy") {
                $("#body").css("background-color", "#76D7C4");
               
            }
            else if (weather === "Mostly Cloudy") {
                $("#body").css("background-color", "#D2B4DE");
              
            }
            else {
                $("#body").css("background-color", "#85C1E9");
               
                
            }
        });
    }
    var form = $("#my-forma");
    form.submit(processForm);

    //transition
    var counter = 0, // to keep track of current slide
        $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
        numItems = $items.length; // total number of slides

    // this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function () {
        var itemToShow = Math.abs(counter % numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  

        $items.removeClass('show'); // remove .show from whichever element currently has it
        $items.eq(itemToShow).addClass('show');
    };
    //hover

    // add click events to prev & next buttons 
    $('.next').on('click', function () {
        counter++;
        showCurrent();
    });
    $('.prev').on('click', function () {
        counter--;
        showCurrent();
    });

    window.setInterval(function () {
        counter++;
        showCurrent(); // increment & show
    }, 4000);
}
