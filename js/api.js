//from json placeholder
function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

//
function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUser(data))
}
//
function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => resp.json())
  .then(post => console.log(post))
}
//loadPosts(); এটার মাধ্যমে ডাটা অটোমেটিক লোড হয়ে যাবে

function displayUser(data){
  console.log(data);
}