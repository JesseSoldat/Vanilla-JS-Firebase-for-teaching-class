var fNameProfile = document.getElementById('fNameProfile');
var lNameProfile = document.getElementById('lNameProfile');
var emailProfile = document.getElementById('emailProfile');
var addressProfile = document.getElementById('addressProfile');
var cityProfile = document.getElementById('cityProfile');
var stateProfile = document.getElementById('stateProfile');
var countryProfile = document.getElementById('stateProfile');





var uid;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	uid = user.uid
  	console.log(uid);
  	firebase.database().ref('users/' + uid + '/profile').on('value', function(snapshot) {
  	console.log(snapshot.val().city);
  	fNameProfile.textContent = snapshot.val().fName;
  	lNameProfile.textContent = snapshot.val().lName;
  	emailProfile.textContent = snapshot.val().email;
  	addressProfile.textContent = snapshot.val().address;
  	cityProfile.textContent = snapshot.val().city;
  	stateProfile.textContent = snapshot.val().state;


	});
  
  } else {
    
  }
});

var profileLogout = document.getElementById('profileLogout');

profileLogout.addEventListener('click', logout);



function logout(){
	firebase.auth().signOut().then(function() {
		
    window.location.href = "./index.html";
  	
	}, function(error) {
	  // An error happened.
	});
}

