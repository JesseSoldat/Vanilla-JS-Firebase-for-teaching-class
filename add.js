var userData;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
    // console.log(user);
    userData = user;
  } else {
    window.location.href = "./index.html";
  }
});

var fNameInput = document.getElementById('fName');
var lNameInput = document.getElementById('lName');
var avatarInput = document.getElementById('avatar');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var stateInput = document.getElementById('state');
var zipInput = document.getElementById('zip'); 
var countryInput = document.getElementById('country');
var bioInput = document.getElementById('bio');

var addProfile = document.getElementById('addProfile');

var goToProfile = document.getElementById('goToProfile');


addProfile.addEventListener('submit', addUser);

goToProfile.addEventListener('click', routeToProfile);


function addUser(e){
	e.preventDefault();
	var fName = fNameInput.value;
	var lName = lNameInput.value;
	var avatar = avatarInput.value;
	var address = addressInput.value;
	var city = cityInput.value;
	var state = stateInput.value;
	var zip = zipInput.value;
	var country = countryInput.value;
	var bio = bioInput.value;
    
	console.log(userData);


	function writeUserData() {
	  firebase.database().ref('users/' + userData.uid + '/profile').set({
	  	email: userData.email,
	    uid: userData.uid,
	    fName: fName,
	    lName: lName,
	    avatar: avatar,
	    address: address,
	    city: city,
	    state: state,
	    zip: zip,
	    country: country,
	    bio: bio,   
	  });
	}
	writeUserData();

	goToProfile.style.display = 'inline-block';

	addProfile.style.display = 'none';
}

	function routeToProfile(){
		window.location.href = './profile.html';
	}

