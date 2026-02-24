import express from "express";
//express library to make a server
const app = express();
export default app;

import employees from "#db/employees";
//data from db/employees.js using an alias (#db/...)

app.get("/", (req, res) => {
  res.send("Hello employees!");
});
// '/' thats the home page - REQuest coming in RESponse sent back

app.get("/employees", (req, res) => {
  res.send(employees);
});

//when visit GET/employees sned back the whole employees ARRAY

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

// math.random() gives a random decimal
// employees.lnegth turns it into a range 0 to length -1
// math.floor (...) rounds a to a whole number 

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  // Route for GET /employees/something where something is stored as id.

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});