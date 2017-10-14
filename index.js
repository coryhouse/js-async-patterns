// getPostsCallback(function(posts) {
//   posts.map( post => console.log(post));
// });

getPostsPromise().then( posts => {
 console.log(posts.length);
});

// function getPostsCallback(callback) {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     debugger;
//     callback(response.json());
//   })
//   .catch( error => console.log(error));
// }

function getPostsPromise() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    return response.json();
  })
  .catch( error => console.log(error));
}

// async function getPostsAsync() {
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     return response.json();
//   })
//   .catch( error => console.log(error));
// }
