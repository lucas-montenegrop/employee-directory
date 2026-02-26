# Employee Directory

A local organization wants to create an application that allows them to manage their employees. You are tasked with creating a proof-of-concept API using placeholder data.

## Requirements

Write and export an Express app in `app.js` that serves the following endpoints.
Run `npm test` to make sure that you are passing all test cases!

- `GET /` sends the string `"Hello employees!"`.
- `GET /employees` sends the array of employees.
- `GET /employees/:id` sends the employee with the given `id`.
  - This should 404 with a message if there is no employee with that id.
- `GET /employees/random` sends a random employee from the array.
  - Be very careful about where you write this middleware!
    A request is handled by the _first_ handler with a matching route.

## Submission

Submit the link to your public GitHub repository.


35

# Employee Directory v2

The organization is pleased with your work in creating the proof-of-concept employee-management API.
Take your work to the next level by adding middleware and organizing your endpoints into routers!

## Requirements

This repository contains the solution code to the previous workshop.
Refactor this code to meet the following requirements:

- A catch-all error-handling middleware sends status 500 for uncaught errors.
- All `/employees` routes are organized into a separate router.
- `POST /employees` adds a new employee with the provided `name` from the request body
  - Send 400 if request body or name is not correctly provided
  - Send 201 with the new employee if name is correctly provided
  - The new employee's ID should be unique (using the array index is fine!)

Feel free to make new folders and files as you see fit!

## Submission

Submit the link to your public GitHub repository.
