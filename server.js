const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  let filePath = "." + req.url

  if (filePath === "./") {
    filePath = "./index.html"
  }

  const extname = path.extname(filePath)
  let contentType = "text/html"

  switch (extname) {
    case ".css":
      contentType = "text/css"
      break
    case ".js":
      contentType = "text/javascript"
      break
    case ".json":
      contentType = "application/json"
      break
    case ".png":
      contentType = "image/png"
      break
    case ".jpg":
      contentType = "image/jpg"
      break
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        fs.readFile("./404.html", (error, content) => {
          res.writeHead(404, { "Content-Type": "text/html" })
          res.end(content, "utf-8")
        })
      } else {
        res.writeHead(500)
        res.end(`Server Error: ${error.code}`)
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType })
      res.end(content, "utf-8")
    }
  })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})

