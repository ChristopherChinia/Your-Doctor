const email = document.getElementById('#email');
const error = document.getElementById('error-text');
const btn = document.getElementById(submit);

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   function check(){
     if (email.value.match(regExp)){

     }
     else{
       alert('Error');
     }
   }