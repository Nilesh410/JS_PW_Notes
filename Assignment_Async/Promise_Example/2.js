let promise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  promise.then(value => console.log(value));