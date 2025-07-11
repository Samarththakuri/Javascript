let promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Success value");
  } else {
    reject("Error reason");
  }
});
