var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

//setting te number of loops to be preformed
var loopCount = bands.length;
//setting the appropriate DOM element in index.html
var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");

//Startng loop
for (var i = 0; i < loopCount; i += 1) {

var currentBand = bands[i];
var currentVeggie = vegetables[i];

//current band
var bandString = "";

//adding band names into correct <div>
 	bandString += '<p>' + currentBand + '</p>';
 	//printing to DOM
	bandElement.innerHTML += bandString;

//current veggie
var veggieString = "";

//adding veggie names into correct <div>
	veggieString += '<p>' + currentVeggie + '</p>'
	//printing to DOM
	veggieElement.innerHTML += veggieString
}