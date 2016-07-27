var fNameEdit = document.getElementById('fNameEdit');
var lNameEdit = document.getElementById('lNameEdit');
var emailEdit = document.getElementById('emailEdit');
var addressEdit = document.getElementById('addressEdit');
var cityEdit = document.getElementById('cityEdit');
var stateEdit = document.getElementById('stateEdit');
var countryEdit = document.getElementById('countryEdit');
var bioEdit = document.getElementById('bioEdit');
var avatarEdit = document.getElementById('avatarEdit');

var editBtn = document.getElementById('editBtn');

var goToProfile = document.getElementById('goToProfile');

goToProfile.addEventListener('click', routeToProfile);

function routeToProfile(){
    window.location.href = './profile.html';
  }



var uid;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	uid = user.uid
  
  	firebase.database().ref('users/' + uid + '/profile').on('value', function(snapshot) {
  	
  	fNameEdit.value = snapshot.val().fName;
  	lNameEdit.value = snapshot.val().lName;
  	emailEdit.value = snapshot.val().email;
  	addressEdit.value = snapshot.val().address;
  	cityEdit.value = snapshot.val().city;
  	stateEdit.value = snapshot.val().state;
    zipEdit.value = snapshot.val().zip;
  	countryEdit.value = snapshot.val().country;
    bioEdit.value = snapshot.val().bio;
    avatarEdit.value = snapshot.val().avatar;

    editBtn.addEventListener('click', editProfile);

    editBtn.disabled = false;


    function editProfile(){
      firebase.database().ref('users/' + uid + '/profile').set({
          email: user.email,
          uid: uid,
          fName: fNameEdit.value,
          lName: lNameEdit.value,
          avatar: avatarEdit.value,
          address: addressEdit.value,
          city: cityEdit.value,
          state: stateEdit.value,
          zip: zipEdit.value,
          country: countryEdit.value,
          bio: bioEdit.value,   
        });
}


	});
  
  } else {
    
  }
});