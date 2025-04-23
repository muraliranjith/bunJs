// console.log("Hello via Bun!");

// function add(a: number, b: number): number {
//     return a+b;
// }

// const sum = add(4,4);

// console.log('sum of a + b =', sum);

// import chalk from "chalk";

// const colors = require("colors");

// console.log(chalk.magenta("Hello from chalk!"));
// console.log(colors.cyan("Hello from colors!"));


// async function fetchFunction() {
//     const response = await fetch("https://api.github.com/users/hadley/orgs");
//     const user: any = await response.json();
//     console.log('user data', user[0].url);

// }

// fetchFunction();

// const file = Bun.file('package.json');

// const fileContents = await file.text();

// console.log(fileContents);

// await Bun.write("index.html", "Hi again from Bun")


// import { fetchFunction } from "./user.ts";

// const userName = await fetchFunction();
import { serve } from 'bun';
import figlet from 'figlet';
import html from "./index.html";

// Set up PostgreSQL connection
// const db: any = postgres({
//     host: 'localhost',  // Replace with your database host
//     port: 5432,         // PostgreSQL port (default is 5432)
//     database: 'posts',  // Database name
//     user: 'postgres',  // Username
//     password: '12345678',  // Password
// });

const app = serve({
    port: 3000,
    fetch: async (req) => {
        console.log('req.method', req.method);

        const url = new URL(req.url);

        if (url.pathname === '/error') {
            throw new Error("Could not fetch data");
        }

        if (url.pathname === '/') {
            const body = figlet.textSync('Hello guys');
            return new Response(body);
            // Fetch posts from the database
            // try {

            //     const posts = await db`select * from posts`;  // Assuming 'posts' is your table

            //     return new Response(JSON.stringify(posts), {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     });
            // } catch (error: any) {
            //     return new Response('Database query failed: ' + error.message, {
            //         status: 500,
            //         headers: {
            //             'Content-Type': 'text/plain'
            //         }
            //     });
            // }
        }

        if (url.pathname === '/about' && req.method === 'GET') {
            return new Response('About Me');
        }

        if (url.pathname === '/contact' && req.method === 'POST') {
            return new Response('Contact Us');
        }

        if (url.pathname === '/greet' && req.method === 'GET') {
            return new Response(Bun.file('./greet.txt'));
        }

        return new Response('404!');
    },

    error(error) {
        return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
            headers: {
                'Content-Type': 'text/html'
            }
        });
    }
});

console.log(`Listening on PORT http://localhost:${app.port}`);
