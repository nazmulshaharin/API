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
  //.then(post => console.log(post))
  //or
  .then(post => displayPost(post))
}

function displayPost(post){
console.log(post)
/* const ul = document.getElementById('post');
  for(const status of post){
//console.log(status);
const li = document.createElement('li');
li.innerText = `TILTLE: ${status.title}`;
ul.appendChild(li);
}   
} */
}

//
//loadPosts(); এটার মাধ্যমে ডাটা অটোমেটিক লোড হয়ে যাবে

 function displayUser(data){
 // console.log(data);
 //const ul = document.getElementById('users');
 for (const user of data){
  console.log(user);
//
 const li = document.createElement('li');
//li.innerText = 'ami';
//li.innerText = user.name;
li.innerText = `name: ${user.name} Email: ${user.email}`;
ul.appendChild(li);
 } 
 }