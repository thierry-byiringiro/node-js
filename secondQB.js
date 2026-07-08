import express from "express";

const app = express();
app.use(express.json());
const tasks = [
  { id: 1, task: "Set up project repository", status: "done" },
  { id: 2, task: "Design database schema", status: "doing" },
];

const users = [
  { id: 1, name: "Aime", hobbie: "Playing" },
  { id: 2, name: "Goat", hobbie: "Kinubi" },
];

const requestLogger = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const d = Date.now() - start;
    const timestamp = new Date().toString();
    console.log(
      `[${timestamp} ${req.method} ${req.originalUrl} - ${d}]`,
    );
  });

  next();
};

app.use(requestLogger);
app.get("/", (req, res) => {
  res.json(tasks);
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.listen(1000, () => {
  console.log("running");
});
