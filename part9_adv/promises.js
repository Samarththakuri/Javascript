//promise creation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully"); // object ya array bhi bhej skte hai usme
      } else {
        reject("data fetch unsuccessful");
      }
    }, 3000);
  });
}
// consume hai abb
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//yeh chaining hori hai
fetchData()
  .then((value) => {
    console.log(value);
    return "Hello";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((data) => {
    console.log(data);
  });
