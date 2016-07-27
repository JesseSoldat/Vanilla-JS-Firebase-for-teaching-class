var fNameEdit = document.getElementById('fNameEdit');
var lNameEdit = document.getElementById('lNameEdit');
var emailEdit = document.getElementById('emailEdit');
var addressEdit = document.getElementById('addressEdit');
var cityEdit = document.getElementById('cityEdit');
var stateEdit = document.getElementById('stateEdit');
var countryEdit = document.getElementById('countryEdit');
var bioEdit = document.getElementById('bioEdit');
var avatarEdit = document.getElementById('avatarEdit');



var uid;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	uid = user.uid
  	console.log(uid);
  	firebase.database().ref('users/' + uid + '/profile').on('value', function(snapshot) {
  	console.log(snapshot.val().city);
  	fNameEdit.value = snapshot.val().fName;
  	lNameEdit.value = snapshot.val().lName;
  	emailEdit.value = snapshot.val().email;
  	addressEdit.value = snapshot.val().address;
  	cityEdit.value = snapshot.val().city;
  	stateEdit.value = snapshot.val().state;
  	countryEdit.value = snapshot.val().country;
    bioEdit.value = snapshot.val().bio;
    avatarEdit.value = snapshot.val().avatar;



	});
  
  } else {
    
  }
});