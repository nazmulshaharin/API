/* function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data))
}
loadPosts();

function displayPost(posts){
  //console.log(posts)
  const postContainer = document.getElementById('posts');
  for(const post of posts){
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    postContainer.appendChild(div);
    //console.log(post.title);
  }
} */

function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data))
}
loadPosts();

function displayPost(posts){
//console.log(posts)
const postContainer = document.getElementById('posts'); 
for(const post of posts){
  const div = document.createElement('div');
  div.classList.add('post');
  div.innerHTML = `
  <h1>${post.id}</h1>
  <p>${post.title}</p>
  `
  postContainer.appendChild(div);
  //console.log(post)
}
}