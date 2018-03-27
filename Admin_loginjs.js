function showsPassword() {
  var x = document.getElementById("showPassword");
  if(x.type === "password") {
    x.type = "text";
  }
  else{
    x.type = "password";
  }
}
function check(){
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var encrypted_Password = btoa(password.value);
  var loggedIn = false;
  if(username.value == "meridicycle"){
    if(encrypted_Password == "8e0a4163f49a5e09f9f931a559f0a174"){
      loggerIn = true;
    }
  }
}
