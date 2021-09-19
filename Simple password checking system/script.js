
// #Bug 1
// In line 13 user's password must be not a null value..

var pwd;

function pwd_check_istrue(){
	x = prompt("Enter your new password : ");
	y = prompt("Enter your confirm password : ");
	var z = y.length;

	if(z >= 10){
		if (x!=null && y!=null){ 	//Bug 1
			if (x==y){
				alert("Your password is correct");
				pwd = x;

				for (var i=3; i>=0; i--){
					var k = i-1;
					if(i !== 0){
						z = prompt("Enter your password to get acsess : ");
						if (z==null){
							alert("Please enter a passwrod");
						}

						else if (pwd==z){
							console.log("You got access!");
							break
						}

						else {
							console.log("Your password is incorrect. Retry! ");
							alert("You have only "+k+" more chances left!");
						}
					}
					else{
						alert("Your chances are almost gone! Try again later.");
					}
				}	
			}

			else {
				alert("Re-enter your password");
			}
		}

		else{
			alert("Please enter a password!");
		}
	}

	else{
		alert("Your password must be include 10 or more charactors!");
	}
}

alert("A simple password checking system made by Nisandu.. Plz don't enter a null value to password!");

pwd_check_istrue();