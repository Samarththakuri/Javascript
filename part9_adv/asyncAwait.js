function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve ke jagah reject bhi try karna
      resolve(
        {
          name: "Samarth",
          url: "https://chaicode.com",
        },
        3000
      );
    });
  });
}
// other than then catch , async can also be used
async function getUserData() {
  // no gurantee that data might be catched therefore
  // should not disrupt the flow
  try {
    console.log("Fetching user data....");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
