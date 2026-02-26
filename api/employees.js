import express from "express";
import {
  getEmployees,
  getEmployee,
  getRandomEmployee,
  createEmployee,
} from "#db/employees";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(getEmployees());
});

router.get("/random", (req, res) => {
  res.send(getRandomEmployee());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id); // convert string -> number
  const employee = getEmployee(id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

router.post("/", (req, res) => {
  if (
    !req.body ||
    typeof req.body.name !== "string" ||
    req.body.name.trim() === ""
  ) {
    return res.status(400).send("invalid request must provide employee name");
  }

  const newEmployee = createEmployee(req.body.name.trim());
  res.status(201).send(newEmployee);
});

export default router;
