const { readFile } = require("fs/promises");
const http = require("http");

function middleware(req, res) {
  console.log(req);
}

const server = http.createServer(async (req, res) => {
  // TASK 4 -- MIDDLEWARE
  middleware(req);

  // TASK 2 -- FILE MANIPULATION
  if (req.url === "/file") {
    const file = await readFile("data.txt");
    const fileContent = file.toString();

    res.setHeader("content-type", "text/plain");
    return res.end(fileContent);
  }

  // TASK 3 -- JSON API
  if (req.url === "/api/user") {
    const user = { name: "Ezeobi Kingsley Sunny", email: "ezeobisunny51@gmail.com", age: 90 };

    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify(user));
  }

  // TASK 1 -- SIMPLE SERVER
  res.end("Hello, Nodejs!");
});

server.listen(3000);
