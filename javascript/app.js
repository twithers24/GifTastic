//This is the array that holds the button value
var icons = [ "Michael Jackson", "Michael Jordon", "Muhammad Ali", "Lebron James", "Jay-Z", "The Beatles", "2-Pac", "The Black Panther", "Bruno Mars", "Kevin Hart", "Notorious BIG", "Dave Chapelle"];
//function to create a button
function createBttn() {
    $("#buttons").empty();
    for(var i = 0; i<icons.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("icon");
        gifButton.attr("data-name", icons[i]);
        gifButton.text(icons[i]);
        $("#buttons").append(gifButton);  
    }
};
//code that executes search and 
function gifSearch() {
    $("#search").on("click", function(event) {
    event.preventDefault();
    var icon = $("#userInput").val().trim();
    $("#userInput").val("");
    icons.push(icon);
    createBttn();
});
};

createBttn();
gifSearch();


$("button").on("click", function() {
 $("#gifs").empty();  
 var name = $(this).attr("data-name");  
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=bkJzReGjzp4fY7a1McQYtAnhobtO6m2x&limit=16";  
 $.ajax({
   url: queryURL,
   method: "GET"
 })
.then(function(response) {
   var results = response.data;
   for (var i = 0; i < results.length; i++) {
    console.log(queryURL);
    console.log(response);
     var iconImage = $("<img>");
     iconImage.addClass("motion");
     iconImage.attr("src", results[i].images.fixed_height.url);
  $("#gifs").append(iconImage);
    }
 });
});

$(".image").on("click", function() {
var state = $(this).attr("data-state");
if (state === "still") {
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
} else {
$(this).attr("src", $(this).attr("data-still"));
$(this).attr("data-state", "still");
}

});
