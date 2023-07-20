const express = require("express"),
  app = express(),
  formidable = require("formidable"),
  path = require("node:path"),
  fs = require("node:fs"),
  throttle = require("express-throttle-bandwidth");

const port = process.env.PORT || 3000,
  folder = path.join(__dirname, "files");

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

app.set("port", port);
app.use(throttle(1024 * 128), express.json()); // throttling bandwidth

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/upload", (req, res) => {
  const form = new formidable.IncomingForm();

  form.uploadDir = folder;
  form.parse(req, (_, fields, files) => {
    res.send("Thank you");
  });
});

app.post("/api/entry", (req, res) => {
  try {
    let { firstName, lastName, email } = req.body;

    if (firstName && lastName && email) {
      res.status(200).json({
        msg: `${firstName} accepted`,
      });
    } else {
      res.status(400).json({
        err: "All fields are required",
      });
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("\nUpload server running on http://localhost:" + port);
});
