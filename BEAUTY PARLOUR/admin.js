

function myfunction(){
  var x =document.getElementById("password");

  if(x.type === "password"){
      x.type = "text";
  }
  else{
      x.type = "password";
  }
}



   function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == 'omsai' && password == '12345') {
      alert('Login successful');
      return true;
    }
   else if(username == 'gopi' && password == '123456') {
      alert('Login successful');
      return true;
    }
    else if(username == 'vamsi' && password == '1234567') {
      alert('Login successful');
      return true;
    }
    else if(username == 'sai' && password == '12345678') {
      alert('Login successful');
      return true;
    }
 
    else if(username == 'hari' && password == '12345679') {
      alert('Login successful');
     /* window.location.replace("index.html"); */
      return true;
    }
    
     else {
      alert('Login failed. Please check your username and password.');
     
      return false;
    }

  }










