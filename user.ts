export async function fetchFunction() {
    const response = await fetch("https://api.github.com/users/hadley/orgs");
    const user: any = await response.json();
    // console.log('user data', user[0].url);
    
}

fetchFunction();