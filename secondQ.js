import express from "express";

const app = express();
const PORT = 7000;
app.use(express.json());

const tasks = [
  { id: 1, task: "Set up project repository", status: "done" },
  { id: 2, task: "Design database schema", status: "doing" },
  { id: 3, task: "Implement authentication flow", status: "todo" },
  { id: 4, task: "Build user dashboard UI", status: "doing" },
  { id: 5, task: "Write unit tests for API", status: "todo" },
];
app.get("/todo", (req, res) => {
  res.send(JSON.stringify(tasks, null, 2));
});
app.get("/todos", (req, res) => {
  const queryParams = req.query.status;
  const finalData = tasks.filter((el) => el.status === queryParams);
  const lastOne =
    finalData.length > 0
      ? finalData
      : [{ message: "The data you are looking for does not exist" }];
  res.send(JSON.stringify(lastOne, null, 2));
});
app.post("/todo", (req, res) => {
  const body = req.body;
  tasks.push(body);
  res.send(JSON.stringify(tasks, null, 2));
});

app.listen(PORT, () => {
  console.log(`The server is running on this ${PORT} port`);
});
