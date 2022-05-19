const uname = document.getElementById('uname');
const pass = document.getElementById('pass');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === ''){
    
  }
 
}

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   function check(){
     if (email.value.match(regExp)){

     }
     else{
       alert('Error');
     }
   }