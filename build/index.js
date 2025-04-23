// user.ts
async function fetchFunction() {
  const response = await fetch("https://api.github.com/users/hadley/orgs");
  const user = await response.json();
}
fetchFunction();

// index.ts
var userName = await fetchFunction();
