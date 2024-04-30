import e from "express";

const app = e();

app.get("/", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(4000, () => {
  console.log("Server is running...");
});
