let promise = new Promise((resolve, reject) => {
    throw new Error('Error thrown');
  });
  promise.catch(error => console.log(error.message));