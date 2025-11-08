# Node.js CI/CD Demo Project

A small Node.js project demonstrating **CI/CD with GitHub Actions** and deployment using **Express**. This project includes utility functions, automated Jest tests, and can be deployed to platforms like Render.

---

## Features

* **Functions:**

  * `greet(name)` - Returns a greeting for a single person.
  * `add(a, b)` - Adds two numbers.
  * `greetAll(names)` - Returns greetings for multiple people, validates input.

* **Express Server:**

  * `/` - Returns a greeting string.
  * `/add` - Returns the sum of 2 + 3.
  * `/greetAll` - Returns greetings for multiple people.

* **Automated Testing with Jest:**

  * `tests/greet.test.js` - Tests single greetings.
  * `tests/add.test.js` - Tests addition function.
  * `tests/greetAll.test.js` - Tests multiple greetings and input validation.

* **CI/CD Workflow:**

  * GitHub Actions runs on every push to `main`.
  * Installs Node.js, dependencies, and runs Jest tests.
  * Optionally deploys automatically to Render if tests pass.

---

## Getting Started

### Prerequisites

* Node.js installed
* Git
* (Optional) Render account for deployment

### Installation

```bash
git clone https://github.com/<your-username>/github-actions-demo.git
cd github-actions-demo
npm install
```

### Run Locally

```bash
npm start
```

* Access endpoints:

  * `http://localhost:3000/` → Greeting
  * `http://localhost:3000/add` → Sum of 2 + 3
  * `http://localhost:3000/greetAll` → Greetings for multiple people

### Run Tests

```bash
npm test
```

---

## CI/CD Pipeline

1. Push changes to GitHub.
2. GitHub Actions runs tests automatically.
3. If tests pass, Render can auto-deploy the app.

---

## Notes

* Server only starts when running `node index.js` directly, preventing Jest from starting the server during tests.
* The project demonstrates a full CI/CD pipeline, automated testing, and live deployment — ideal for showcasing on a CV or in interviews.
