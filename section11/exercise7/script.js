var database = [
    {
        username: "earleyj1",
        password: "myPass"
	},
	{
        username: "sally",
        password: "123"
	},
	{
        username: "meghan",
        password: "777"
    }
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function isUserValid(userName, password){
	for(var i=0; i<database.length; i++){
		if(database[i].username === userNamePrompt &&
		 database[i].password === passwordPrompt){
			 return true;
		 } 
	}
	return false;
}

function signIn(username, password){
	if(isUserValid(username, password)){
        console.log(newsfeed);
    } else{
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);