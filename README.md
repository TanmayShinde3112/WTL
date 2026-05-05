# WTL Project Repository

This repository is a collection of web technology exercises, classwork, homework, and small demo applications built with plain HTML/CSS/JavaScript, Node.js, Express, Mongoose, and React.

## What Is In This Repo

The workspace is organized as a set of independent mini-projects rather than one single application.

- `app.js`, `style.css`, and the root HTML files contain vanilla JavaScript browser exercises such as a todo list and form/UI practice.
- `backend/` contains a small Express REST API for student data.
- `my-app/` contains a Vite + React starter/demo app.
- `pu/`, `axios/`, `axios-demo/`, and similar folders contain React practice apps and API-fetching demos.
- `express/` contains another Express server example.
- `Mongoose/` contains Node.js + MongoDB/Mongoose practice code.
- `WTL PR*` folders and the `docs/` directory contain assignment and coursework material.
- `Node.js Notes.md` and `React Notes.md` are study notes included in the repository.

## Main Entry Points

| Project | Location | Purpose |
| --- | --- | --- |
| Vanilla JS practice | Root files such as `app.js`, `script.js`, `index.html`, `sample*.html` | Browser-based HTML/CSS/JS exercises |
| Backend API | `backend/Server.js` | Express API for student records |
| Vite React app | `my-app/` | React + Vite starter/demo |
| CRA React app | `pu/` | React app created with Create React App |
| Axios demos | `axios/`, `axios-demo/` | React apps for API fetching with Axios |
| Express demo | `express/Server.js` | Additional Express example server |
| Mongo/Mongoose practice | `Mongoose/app.js` | MongoDB/Mongoose example code |

## Requirements

- Node.js 18 or newer is recommended.
- npm is required for the Node-based folders.
- A modern browser is enough for the plain HTML/JS exercises.
- MongoDB is only needed if you run the Mongoose examples against a live database.

## How To Run

There is no single root start command because the repository contains multiple separate projects. Run the folder you want to test.

### Backend API

```bash
cd backend
npm install
npm start
```

The server listens on `http://localhost:3000`.

Available endpoints:

- `GET /`
- `GET /students`
- `GET /student?id=1`
- `POST /addstudent`
- `PUT /updatestudent/:id`
- `DELETE /deletestudent/:id`

### Vite React App

```bash
cd my-app
npm install
npm run dev
```

### Create React App Demo

```bash
cd pu
npm install
npm start
```

### Axios Demo Apps

```bash
cd axios-demo
npm install
npm start
```

Use the same pattern for `axios/` or any other React demo folder that includes a `package.json`.

### Plain HTML/JavaScript Exercises

Open the required HTML file directly in a browser, or serve the folder with any static server. These examples are designed to run without a build step.

## Suggested Folder Guide

- Use the root-level HTML files for quick browser-based practice.
- Use `backend/` and `express/` for API/server examples.
- Use `my-app/`, `pu/`, `axios/`, and `axios-demo/` for React practice.
- Use `Mongoose/` for MongoDB model and database examples.

## Notes

- Some folders are duplicate or alternate versions of similar exercises, which is common in classwork repositories.
- A few generated folders such as `node_modules/` may exist locally; they should not usually be committed in a clean project setup.
- If you want, this README can be split into separate READMEs for each major subproject later.