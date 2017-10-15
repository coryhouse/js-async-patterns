getPostsCallback(function(error, posts) {
  if (error) {
      console.log(error);
  } else {
      console.log(posts.length);
  }
});

getPostsPromise().then( posts => {
 console.log(posts.length);
});

getPostsAsync().then(posts => {
    console.log(posts.length);
});

function getPostsCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            callback(null, xhr.response);
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    try {
        xhr.send();
    } catch (error) {
        callback(error);
    }
}

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
