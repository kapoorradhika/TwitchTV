//DRAFT 2

console.log("js is working");
var user = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "freecodecamp", "comster404", "brunofin"]; //closing users array
var userLowerCase = [];
var linkArray = [];
var link;
var gamerName;
for (var i = 0; i < user.length; i++) {
	userLowerCase.push(user[i].toLowerCase());
	link = 'https://api.twitch.tv/kraken/streams/' + userLowerCase[i];
	linkArray.push(link);
	gamerName = userLowerCase[i];
}; //closing for loop to convert user array into lower case user array


	var gamerInformation = function () {
		console.log("gamerInformation is working");
		for (var j = 0; j < linkArray.length; j++) {
			$.getJSON(linkArray[j], function (data) {

			if(data.stream === null) {
				console.log("create the offline object here");
				// OFFLINE OBJECT
				var offline = {
				"status": "offline",
				}; // closing offline object

					$(".newUser").append(
				'<div class="col-md-4 ' + offline.status + '"> <img src = "https://thevicarswife.files.wordpress.com/2013/10/offline.jpeg"> </div>' +
					'<div class="col-md-4 ' + offline.status + '">  <a target = "_blank" href = https://www.twitch.tv/' + userLowerCase[i] + '>' + userLowerCase[i] + '</a></div>' +
					'<div class="col-md-4 ' + offline.status + '">' + offline.status + '</div></br></br></br></br></br>'
			); // closing append
			} //closing if statement for finding offline object

			


			else if(data.stream.hasOwnProperty("_id")) {
				console.log("create the online object here");
				// ONLINE OBJECT
				var online = {
				"displayName": data.stream.channel.display_name,
				"name": data.stream.channel.name,
				"status": "online",
				"logo": data.stream.channel.logo,
				"gameName": data.stream.channel.game,
				"userURL": data.stream.channel.url,	
			}; //closing online object

				$(".newUser").append(
				'<div class="col-md-4 ' + online.status + '"> <img src = ' + online.logo + '> </div>' +
					'<div class="col-md-4 ' + online.status + '">  <a target = "_blank" href = ' + online.userURL + '>' + online.displayName + '</a></div>' +
					'<div class="col-md-4 ' + online.status + '">' + online.gameName + '</div></br></br></br></br></br>'
			); // closing append
			} //closing else if statement for finding online object

			



			else if (data.error === "Unprocessable Entity") {
			console.log("create the account closed object here");
			}; // closing else if for account closed objects

			}); // closing JSON function
		}; // closing 'for loop'. looping through every linkArray element and getting data
	}; // closing gamerInformation


gamerInformation();




















//DRAFT 1

//make an array of users called gamerName
//go to each array element which is a username, assign it as the gamerName
//for each element of the array call the function find status and createDiv

// var gamerName;

// for (var i = 0; i < user.length; i++) {
// user[1] = gamerName;
// console.log(gamerName);
// console.log(user[1]);
// gamerInfo.findStatus();
// gamerInfo.createDiv();
// }; // closing for statement



// $(document).ready(function () {
// $.getJSON('https://api.twitch.tv/kraken/streams/' + gamerName, function(data) {


 // get information of the user in gamerInfo 
// var gamerInfo = {
// 	"displayName": data.stream.channel.display_name,
// 	"name": data.stream.channel.name,
// 	"status": data.stream,
// 	"logo": data.stream.channel.logo,
// 	"gameName": data.stream.channel.game,
// 	"userURL": data.stream.channel.url,
	
// 	findStatus: function () {
// 		if (gamerInfo.status === null) {
// 			gamerInfo.status = "Offline";
// 		} // if statement
		// else if (data.error === "Unprocessable Entity") {
		// 	gamerInfo.status = "Account Closed";
		// } // else if statement
		// else if (data.hasOwnProperty("stream._id")) { 
		// 	gamerInfo.status = "Online";
		// } //else statement
	// }, // find status method

	// createDiv: function () {


	// 	if (gamerInfo.status === "Online") {
	// 		$(".newUser").append(
	// 			'<div class="col-md-4 ' + gamerInfo.status + '"> <img src = ' + gamerInfo.logo + '> </div>' +
	// 				'<div class="col-md-4 ' + gamerInfo.status + '">  <a target = "_blank" href = ' + gamerInfo.userURL + '>' + gamerInfo.displayName + '</a></div>' +
	// 				'<div class="col-md-4 ' + gamerInfo.status + '">' + gamerInfo.gameName + '</div>'
	// 		); // closing append
		// }; //closing if statement. Creating div for online users

		// else if (gamerInfo.status === "Offline") {
		// 	$(".newUser").append(
		// 		'<div class="col-md-4 ' + gamerInfo.status + '"> <img src = "https://i.ytimg.com/vi/y5qYUsmZNHg/maxresdefault.jpg"> </div>' +
		// 			'<div class="col-md-4 ' + gamerInfo.status + '">  <a target = "_blank" href = https://www.twitch.tv/' + gamerName + '>' + gamerName + '</a></div>' +
		// 			'<div class="col-md-4 ' + gamerInfo.status + '">' + gamerInfo.status + '</div>'
		// 	); // closing append
		// }; // closing else if statement. Creating div for offline users

		// else if (gamerInfo.status === "Account Closed") {
		// 	$(".newUser").append(
		// 		'<div class="col-md-4 ' + gamerInfo.status + '"> <img src = "http://us.123rf.com/450wm/kchung/kchung1505/kchung150500451/39872646-stamp-account-closed-in-red-over-white-background.jpg?ver=6"> </div>' +
		// 			'<div class="col-md-4 ' + gamerInfo.status + '">  <a target = "_blank" href = https://www.twitch.tv/' + gamerName + '>' + gamerName + '</a></div>' +
		// 			'<div class="col-md-4 ' + gamerInfo.status + '">' + gamerInfo.status + '</div>'
		// 	); // closing append
		// }; // closing 2nd else if statement. Creating div for users whose accounts have been closed

	// }; // create Div method

// closing users array


// }; // gamerInfo Object

//******TO DO:: need to attach the users to all, offline and online buttons****

// }); // $.getJSON 
// }); // document.ready