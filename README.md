# Library Automation Framework

This project is designed to automate the library management system using Playwright and Cucumber. Follow the steps below to set up the environmen and work on the project.

## Table of Contents
1. [Prerequisites](#Prerequisites)
2. [Environment Setup](#environment-setup)
3. [Framework Structure and Usage](#framework-structure-and-usage)

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v18 or higher)
- npm (v6 or higher), which comes with Node.js
- Visual Studio Code
- Git
- Playwright Test
- cucumber (v10 or higher)
- dotenv (v16 or higher)

To install Playwright Test, cucumber, and dotenv, open your terminal and run:
```sh
npm install @playwright/test @cucumber/cucumber dotenv
```
<br>
## Environment Setup

### 1. Clone the "JavaScriptPlaywright" Project To Your System

### 2. Open the Folder in VS Code
3.1 Open the VS Code App  
3.2 Go to `File` and click `Open Folder`  
3.3 Select the "library-automation" folder under the VS Code Projects

### 3. Install VS Code Extensions
Install the following extensions for a better development experience:
- Better Comments
- Cucumber (Gherkin) Full Support
- Material Icon Theme
- NPM
- npm Intellisense
- NPM Run
- Playwright Snippets
- Tabnine

### 4. Create the .env File
Create a .env file at the project root level.<br>
This file will be used for storing credentials, and it's added to the git-ignore file.

### 5. Add Following Environment Variables to the .env File

LIBRARY_URL = "https://library2.cydeo.com/"

LIBRARY_STUDENT_USERNAME="student5@library"
LIBRARY_STUDENT_PASSWORD="libraryUser"

LIBRARY_ADMIN_USERNAME="librarian10@library"
LIBRARY_ADMIN_PASSWORD="libraryUser"

### 6. Run the "test:tag" Script
Go to the package.json file and run the "test:tag" script to verify the setup.<br>

## Framework Structure and Usage

### 1. The `features` folder
This folder is used for storing the feature files, each feature file has a unique tag name which can be used to run specific feature in `package.json` file

### 2. The `hooks` Folder
This folder contains the globalHooks for cucumber step definitions.<br> It also has the playwright utility for page & browser

### 3. The `pages` Folder
This folder is used for storing webelements of the pages.<br>
BasePage must be the parent class of all the page classes.<br>
Every single page class must be added and initialized in the `globalPagesSetup.js` to be able to locate elements of each pages by using same page fixture of playwright

### 4. The `steps` Folder
This folder is used for storing the step definitions of the features.<br>
The file names of the steps should match with its feature file's name.<br>

### 5. The `.env` file
A file to store and load the environment variables that are needed for this automation project.<br>
You will need to create this file in the project at project level, copy all the environment variables from the file that is provided to you on your LMS.

### 6. `cucumber.cjs` File
A CommonJS configuration file for CucumberJS, managing settings for BDD-style automated tests. It includes paths for step definitions, support files, plugins, and output formatting options, allowing customization of test execution.

### 7. `package.json` File
The `package.json` file for the "library-automation" project includes several key sections:

- **`name`**: Identifies the project as "library-automation".
- **`version`**: Marks the current version at "1.0.0".
- **`main`**: Points to the main entry file of the project, "index.js".
- **`scripts`**: Defines custom scripts for the project:
    - **`test`**: Runs CucumberJS tests.
    - **`test:tag`**: Executes CucumberJS tests filtered by the `@tagName` tag.
    - **`Mac-open:report`**: Opens the cucumber report HTML file on macOS.
    - **`Windows-open:report`**: Opens the cucumber report HTML file on Windows.
- **`dependencies`**: Lists project dependencies, including Cucumber, Playwright for testing, and dotenv for environment variable management.
- **`type`**: Specifies the module system, set to "module" for ES Module support.

This setup facilitates BDD-style testing with CucumberJS and Playwright, and includes cross-platform support for viewing test reports.<br>

## Authors
Edip - [Edip](https://github.com/EdipSaci)