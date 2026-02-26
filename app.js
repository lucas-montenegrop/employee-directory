import express from "express";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";

const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(getEmployees());
});

app.get("/employees/random", (req, res) => {
  res.send(getRandomEmployee());
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = getEmployee(id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});