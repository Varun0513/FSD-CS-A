import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/" && req.method === "GET") {
    res.end("Home page");
  } else if (url === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.end("List of all the users");
  } else if (url === "/users/123" && req.method === "GET") {
    res.statusCode = 200;
    res.end("users data by id");
  } else if (url === "/createuser" && req.method === "POST") {
    res.statusCode = 201;
    res.end("User created successfully");
  } else if (url === "/users/123" && req.method === "PUT") {
    res.end("User updated successfully");
  } else if (url === "/delete" && req.method === "DELETE") {
    res.end("User deleted successfully");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(4001, () => {
  console.log("Server is running on port 4001");
});
