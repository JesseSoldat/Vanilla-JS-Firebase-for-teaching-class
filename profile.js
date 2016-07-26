var profileLogout = document.getElementById('profileLogout');

profileLogout.addEventListener('click', logout);



function logout(){
	firebase.auth().signOut().then(function() {
		
    window.location.href = "./index.html";
  	
	}, function(error) {
	  // An error happened.
	});
}