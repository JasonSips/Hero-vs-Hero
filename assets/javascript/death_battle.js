//Variables for compettitors pic
var userP;
var compP;

//Variable for user input
var user_input;

//Variables for power stats
var intell1;
var streng1;
var speed1;
var power1;
var combat1;

var intell2;
var streng2;
var speed2;
var power2;
var combat2;

//Variables for end page gifs
var gif1;
var gif2;
var gif3;
var gif4;

//Variable for random number
var ran = Math.floor(Math.random() * 731 + 1);

//Variables for calculations
var userPoint = 0;
var compPoint = 0;
var winner;
var compN;


//Variable for URL

var cqueryURL = 'https://jsonp.afeld.me/callback?url=http://superheroapi.com/api/10155940577507681/' + ran;

//____________________________________________Actual Coding______________________________________

//Ajax for the User info (Using Search Bar)
console.log($("#submit-button").length);

var debugVar = null;

$("#submit-button").on("click", function () {
    event.preventDefault();
    console.log("54");

    //Making the user input/ DONE
    user_input = $("#user-input").val()
    console.log("The user entered: " + user_input)
    var submit = $("#submit");
    var queryURL = 'https://jsonp.afeld.me/callback?url=http://superheroapi.com/api/10155940577507681/search/' + user_input;

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {

        debugVar = res;
       
        console.log("60");
        var result = res;
        console.log("User Results: " + JSON.stringify(result));

        console.log("This is the response: " + res.response);

        if (res.response === "success") {
            res = res.results[0];

            console.log(res);
            console.log("It is assigning the variables");

            userP = res.image.url;
            console.log(userP);
            console.log("Image is being assigned");
            intell1 = res.powerstats.intelligence;
            console.log("Powerstats are assigning intel");
            streng1 = res.powerstats.strength;
            console.log("Powerstats are assigning stren");
            speed1 = res.powerstats.speed;
            console.log("Powerstats are assigning speed");
            power1 = res.powerstats.power;
            console.log("Powerstats are assigning power");
            combat1 = res.powerstats.combat;
            console.log("Powerstats are assigning combat");

            console.log("It will print to the screen");

            $("#image1").attr("src", userP);
            console.log("Is this working up to this point?");

            $("#intell1").text("Intelligence: " + intell1);
            $("#streng1").text("Strength: "+streng1);
            $("#speed1").text("Speed: "+speed1);
            $("#power1").text("Power: "+power1);
            $("#combat1").text("Combat: " + combat1);
            $("#name1").text("Name: " + user_input)

            console.log(combat1);
            console.log($("#combat1").length);
            compN = debugVar.results[0].name;
            calc();
        }
        // else { }
    });

});
//Ajax for Computer/ DONE
$.ajax({
    url: cqueryURL,
    method: "GET"
}).then(function (res) {
    console.log("83")
    var result = res;
    console.log("Computer Results: " + JSON.stringify(result))

    if (res.response === "success") {

        compP = res.image.url;
        intell2 = res.powerstats.intelligence;
        streng2 = res.powerstats.strength;
        speed2 = res.powerstats.speed;
        power2 = res.powerstats.power;
        combat2 = res.powerstats.combat;

        $("#image2").attr("src", compP);
            console.log("Is this working up to this point?");
        $("#intell2").text("Intelligence: " + intell2);
        $("#streng2").text("Strength: "+streng2);
        $("#speed2").text("Speed: "+speed2);
        $("#power2").text("Power: "+power2);
        $("#combat2").text("Combat: " + combat2);
        $("#name2").text("Name: " + res.results.name)

    }
    else {
    }
});
var list = [];
list.push({input: 'batman'});
recursiveSearch(list);

function recursiveSearch(list){
    if(Array.isArray(list) && list.length <= 0){
        return;
    }
    else{
        var i = list.length - 1;
        var item = list[i];
        list.splice(i, 1);
        var user_input = item.input;
        
        //var queryURL = 'https://superheroapi.com/api/2142530822492926/search/' + user_input;
        var queryURL = 'https://jsonp.afeld.me/callback?url=http://superheroapi.com/api/10155940577507681/search/' + user_input;
        failSafe({
            method: 'GET',
            url: queryURL,
            dataType: 'jsonp'
        }, function(response){
            console.log(response);
        }, 0);
    }
}


function failSafe(ajaxParams, callback){
    var tries;
    if(arguments.length > 2){
        tries = arguments[2];
    }
    if(typeof tries === 'undefined'){
        tries = 0;
    }
    $.ajax(ajaxParams)
    .then(function(response){
        if (response.response === "success") {
            callback(response).bind(this);
        }
        else{
            if (tries < 3){
                tries++;
                failSafe(ajaxParams, callback, tries);
            }
            
        }
    });
}

//If statements to do the calculations on who wins and how.
function calc(){
//If statements for user Point

if (intell1 > intell2) {
    userPoint++
    console.log("User Points: " + userPoint)
}
else {compPoint++ 
    console.log("Comp Points: " + compPoint)}

if (streng1 > streng2) {
    userPoint++
    console.log("User Points: " + userPoint)
}
else {compPoint++ 
    console.log("Comp Points: " + compPoint)}

if (speed1 > speed2) {
    userPoint++
    console.log("User Points: " + userPoint)
}
else {compPoint++ 
    console.log("Comp Points: " + compPoint)}

if (power1 > power2) {
    userPoint++
    console.log("User Points: " + userPoint)
}
else {compPoint++ 
    console.log("Comp Points: " + compPoint)}

if (combat1 > combat2) {
    userPoint++
    console.log("User Points: " + userPoint)
}
else {compPoint++ 
    console.log("Comp Points: " + compPoint)}

//If statement to determine winner

if (userPoint > compPoint) {
winner = user_input;
console.log("The winner is: " + winner)
}
else {
winner = compN;
console.log("The winner is: " + winner)
}
var debug = null;
var images;
var gqueryURL = "https://api.giphy.com/v1/gifs/search?api_key=CIR4y0picv4QO67XYRsFaInN8H84gDlm&q="+ winner +"&limit=4&offset=0&rating=G&lang=en";
$.ajax({
    url: gqueryURL,
    method: "GET"
}).then(function (res) {


debug = res;
console.log(res.data[0].images.preview_gif.url)

for (var i = 0; i <= 8; i++){
var gifs = $("#div3");
images = res.data[i].images.preview_gif.url
console.log(images)
$("#div3").prepend('<img id="theImg" src="'+ images +'" />')

}

})
}