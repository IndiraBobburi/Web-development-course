// var userName = prompt("What is your name?");
// alert("hello! nice to meet you, " + userName);
// console.log("hello! nice to meet you, " + userName);

// var age = Number(prompt("what is your age?"));

// if (age < 0)
// {
// 	console.log("Error:age is negative.")
// }
// else{
// 	if(age == 21){
// 		console.log("happy 21st birthday!!")
// 	}

// 	if(age%2 == 1)
// 	{
// 		console.log("your age is odd number")
// 	}

// 	if(Math.sqrt(age) % 1 == 0)
// 	{
// 		console.log('your age is perfect square.')
// 	}
// }

// var guess = Number(prompt("Guess a number"));
// var num = 7;

// if(guess < num)
// {
// 	alert("too low. try again.");
// }
// else if(guess > num)
// {
// 	alert("too high. try again.");
// }
// else
// {
// 	alert("You guessed it right");
// }

// var val=prompt("Are we there yet?");

// //while(val != "yes" && val != "yeah")
// while(val.indexOf("yes") == -1)
// {
// 	val = prompt("Are we there yet?");
// }

// alert("We have finally made it!!");

// function kebabToSnake(val)
// {
// 	var str = String(val);
// 	for(var i =0; i < str.length; i++)
//     {
//         if(str[i] == "-")
//             str = str.replace["-", "_"];
//     }
// }

// kebabToSnake("vaafl");

// function ques(){
// 	return prompt("what would you like to do?");
// }

// var ans = prompt("what would you like to do?");
// var todoList = [];

// while(ans != "quit")
// {
// 	if(ans == "new")
// 	{
// 		var todo = prompt("add new todo");
// 		todoList.push(todo);
// 		ans = ques();
// 	}
// 	else if(ans == "list")
// 	{
// 		console.log(todoList);
// 		ans = ques();
// 	}
// }

// console.log("you have quit the app.");

val.forEach(
	function(obj)
	{
		if(obj.seen === true)
		{
			console.log("You have watched " + obj.name " - "+ obj.rating + " stars");
		}
		else
		{
			console.log("You have not seen " + obj.name " - "+ obj.rating + " stars");
		}
	})
































