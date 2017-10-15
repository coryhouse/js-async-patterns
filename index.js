// getPostsCallback( posts => {
//   posts.map( post => console.log(post));
// });

// getPostsPromise().then( posts => {
//  console.log(posts.length);
// });

getPostsAsync().then(posts => {
    debugger;
    console.log(posts.length);
});

// function getPostsCallback(callback) {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
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

async function getPostsAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  } catch(error) {
    console.log(error);
  }
}
