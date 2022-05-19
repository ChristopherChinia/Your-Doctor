var name = document.getElementById('uname');
var password = document.getElementById('password');
var form = document.getElementById('form')
var  errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=> {
  var messages = []
  if (name.value === '' || name.value === null
  ){
    messages.push ("Username is required")
  }

  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(',')
  }

  
})
