console.log("Application started"); //1

setTimeout(() => console.log("User data loaded"), 0); //9

Promise.resolve().then(() => {
  console.log("User Authentication completed"); //6

  setTimeout(() => {
    console.log("Dashboard loaded"); //10
  }, 0);

  return Promise.resolve().then(() => {
    console.log("User profile loaded"); //8
  });
});

queueMicrotask(() => {
  console.log("Cache initialized"); //5
  Promise.resolve().then(() => {
    console.log("Preferences restored"); //7
  });
});

(async () => {
  console.log("Fetching configuration"); //3
  await null;
  console.log("Configuration loaded"); //4
})();

console.log("Initial setup completed"); //2

