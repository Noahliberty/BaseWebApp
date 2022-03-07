function handleSignIn() {
  firebase.auth().signInWithPopup(provider).then(function(){
    alert("hi")
  })
}
