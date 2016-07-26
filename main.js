var logEmail = document.getElementById('logEmail');
var logPass = document.getElementById('logPass');
var logForm = document.getElementById('logForm');

logForm.addEventListener("submit", login);

var regEmail = document.getElementById('regEmail');
var regPass = document.getElementById('regPass');
var regForm = document.getElementById('regForm');

regForm.addEventListener("submit", register);



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // window.location.href = "./add.html";

    window.location.href = "./profile.html";
  } else {
    // No user is signed in.
  }
});

function login(e){
	e.preventDefault();
	var email = logEmail.value;
	var password = logPass.value;

	console.log(email);
	console.log(password);

	 firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	});

}


function register(e){
	e.preventDefault();

	var email = regEmail.value;
	var password = regPass.value;

	console.log(email);
	console.log(password);


  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  });

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "./add.html";
  } else {
    
  }
});

}


