# React Project README

## Project Introduction
This project is a front-end application based on React, designed to provide registered users with a platform to showcase the various cars they have collected. Users can explore detailed information about their collections, add new cars, edit existing ones, and even categorize them based on different attributes such as model, year, or manufacturer. Additionally, the application includes an admin panel that allows administrators to manage user accounts, review collections, and perform maintenance tasks such as moderating content or configuring application settings. The admin panel also provides insights into user activity and system performance metrics.

Please follow the steps below to install and run the project.

## Environment Requirements
- **Node.js**: It is recommended to use **Node.js version 20.x**.
- **npm**: The project uses **npm** as the package manager (installed with Node.js).

## Installation Steps

### 1. Clone the Project
First, clone the project code to your local machine using Git:

```sh
$ git clone https://github.com/WeihaoYYY/R2-front.git
$ cd <project-directory>
```

### 2. Install Dependencies
Run the following command to install the required dependencies:

```sh
$ npm install
```
This command will automatically read the dependencies from the `package.json` file and install them.

### 3. Configure Environment
Create a `.env` file according to the project requirements and set the relevant environment variables. You can refer to `.env.example` (if available).

## Run the Project

### 1. Development Mode
Use the following command to start the development server:

```sh
$ npm start
```
This command will start the development server, running by default at `http://localhost:3000`. You can visit this address in your browser to view the project. During development, the API endpoint is set to `REACT_APP_API_BASE_URL=http://localhost:8081`.

### 2. Production Build
To build the project for production, run:

```sh
$ npm run build
```
This command will generate optimized static files in the `build` directory, which can be deployed to a production server. When running `npm run build`, the API endpoint is set to `REACT_APP_API_BASE_URL=<production-api-url>/api` (ensure to replace with your actual API URL without exposing it publicly).

## Notes
- **Node.js Version Requirement**: Please make sure your Node.js version is **20.x** to ensure the project runs properly. If you need to manage different versions of Node.js, you can use **nvm** (Node Version Manager).
- **CORS Issues**: Since the project is a front-end and back-end separated setup, you may encounter **CORS issues** during development. To resolve this, you can download a Chrome extension "**Allow CORS: Access-Control-Allow-Origin**". Make sure to enable the extension only when needed, as it adds CORS headers to all websites, which may lead to security vulnerabilities. Once development is complete, remember to disable the extension.

## FAQ
- If you encounter dependency installation or startup errors, try deleting the `node_modules` directory and reinstalling:

  ```sh
  $ rm -rf node_modules
  $ npm install
  ```
- If the startup is very slow, check your Node.js version or try clearing the npm cache:

  ```sh
  $ npm cache clean --force
  ```

## Contact
If you have any questions, please contact the author at **yue032994@outlook.com**.

