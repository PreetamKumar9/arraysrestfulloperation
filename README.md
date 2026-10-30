# 🚀 RESTful Profile Management System

A beginner-friendly **RESTful Profile Management application** built using Node.js, Express.js, EJS, JavaScript, and Method-Override. This project demonstrates how to perform complete CRUD operations on profile data through dynamic web pages and RESTful routing.

The application uses dummy profile data to demonstrate how users can view, create, edit, update, and delete individual profiles.

<p align="center">
  <a href="https://arraysrestfulloperation.onrender.com/profile">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Project-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/EJS-Templating-B4CA65?style=for-the-badge" alt="EJS">
</p>

---

## 🌐 Live Demo

**Explore the deployed application:**

### 👉 [Open RESTful Profile Management System](https://arraysrestfulloperation.onrender.com/profile)

The `/profile` route displays the available profiles. Explore the other routes to understand how individual profile retrieval, profile creation, editing, and deletion work.

> **Note:** The application is hosted on Render. If the service is inactive, the first request may take some time to load. The application uses dummy data, so data persistence depends on how the project stores its data.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [CRUD Operations](#-crud-operations)
- [Application Routes](#-application-routes)
- [Complete Project Workflow](#-complete-project-workflow)
- [Understanding RESTful Routing](#-understanding-restful-routing)
- [How to Run Locally](#-how-to-run-locally)
- [Environment Configuration](#-environment-configuration)
- [Testing the Application](#-testing-the-application)
- [Error Handling](#-error-handling)
- [Learning Outcomes](#-learning-outcomes)
- [Future Improvements](#-future-improvements)
- [Important Notes](#-important-notes)
- [Author](#-author)

---

## 📖 Project Overview

The RESTful Profile Management System is a web application developed to understand the practical implementation of RESTful routes and CRUD operations using the Node.js and Express.js ecosystem.

The application manages a collection of dummy profiles. Each profile contains information about an individual, and users can interact with this information through dynamically rendered EJS pages.

Instead of implementing a separate frontend framework, the project uses EJS templates to render profile information on the server.

Express.js handles incoming HTTP requests and routes them to the appropriate operations. JavaScript manages the application logic, while Method-Override allows HTML forms to trigger HTTP methods such as `PATCH` and `DELETE`.

This project provides practical experience with backend development, server-side rendering, HTTP methods, route parameters, form submissions, and application deployment.

### 🎯 Main Goal

To build a working profile management application that demonstrates how a RESTful application handles the complete lifecycle of a resource.

---

## 🎯 Project Objectives

The primary objectives of this project are:

- Understand the fundamentals of RESTful architecture.
- Implement Create, Read, Update, and Delete operations.
- Learn routing with Express.js.
- Understand the difference between static routes and dynamic routes.
- Retrieve individual records using route parameters.
- Render dynamic content using EJS templates.
- Process form submissions using Express middleware.
- Use Method-Override to support HTTP methods that HTML forms do not natively support.
- Work with dummy data to simulate a basic data-management application.
- Deploy a Node.js application using Render.
- Understand the relationship between HTTP requests, server-side logic, and rendered responses.

---

## ✨ Features

### 1. View All Profiles

Displays all available profile records on a single page.

**Route:** `/profile`

**Functionality:**
- Retrieves the available profile data.
- Iterates through the profile collection.
- Displays profile details using EJS.
- Provides access to individual profile pages.

### 2. View a Specific Profile

Displays information about one selected profile.

**Route:** `/profile/:id`

**Functionality:**
- Accepts a profile identifier through the URL.
- Searches for the corresponding profile.
- Displays its details.
- Allows the user to navigate to the edit or delete operation, if implemented in the interface.

### 3. Create a New Profile

Provides a page or form for adding a new profile.

**Route:** `/profile/create`

**Functionality:**
- Opens the profile creation interface.
- Accepts user input through a form.
- Submits the information to the server.
- Adds the new record to the profile collection.
- Can redirect the user to the updated profile listing.

The actual form-submission endpoint depends on the POST route implemented in the application.

### 4. Edit an Existing Profile

Allows users to modify information belonging to a specific profile.

**Route:** `/profile/:id/edit`

**Functionality:**
- Identifies the selected profile.
- Loads its existing information into an edit form.
- Allows users to modify one or more fields.
- Submits the updated information to the server.

### 5. Delete a Profile

Removes a selected profile from the collection.

**Route:** `/profile/:id/delete`

**Functionality:**
- Identifies the profile targeted for deletion.
- Processes the deletion request.
- Removes the corresponding record from the data collection.
- Can redirect the user to the profile listing.

**Implementation note:** The URL alone does not determine the HTTP method. In a RESTful implementation, a deletion is typically handled by a `DELETE` request, while an HTML form commonly uses `POST` together with Method-Override.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structures the application's web pages. |
| CSS3 | Styles the user interface, if included in the project. |
| JavaScript | Implements application logic and data manipulation. |
| Node.js | Provides the server-side JavaScript runtime. |
| Express.js | Handles HTTP requests, routing, and responses. |
| EJS | Renders dynamic HTML pages using server-side data. |
| Method-Override | Allows supported HTTP methods to be used through HTML forms. |
| Dummy Data | Provides sample profiles for testing CRUD operations. |
| Render | Hosts the deployed application. |
| Git and GitHub | Support version control and source-code management. |

**Data storage:** This project uses dummy data. Unless a database or persistent storage mechanism has been implemented, changes to an in-memory array may be lost when the server restarts.

---

## 🔄 CRUD Operations

CRUD stands for **Create, Read, Update, and Delete**.

These four operations form the foundation of many data-driven applications.

| Operation | HTTP Method | Purpose | Application Route |
|---|---|---|---|
| Create | POST | Add a new profile | `/profile/create` or its associated submission endpoint |
| Read all | GET | Display all profiles | `/profile` |
| Read one | GET | Display a specific profile | `/profile/:id` |
| Update | PATCH or PUT | Modify an existing profile | `/profile/:id` or the update endpoint implemented by the application |
| Delete | DELETE | Remove a profile | `/profile/:id` or the deletion endpoint implemented by the application |

The table describes the conventional RESTful design. The exact methods and submission URLs should match the routes defined in the source code.

### Create

The application receives profile information from a form and adds a new record to the collection.

### Read

The application retrieves the profile collection or an individual profile and renders the corresponding information.

### Update

The application identifies an existing profile and changes its stored fields. A `PATCH` request is appropriate for partial updates, while a `PUT` request conventionally replaces the complete resource representation.

### Delete

The application identifies the selected profile and removes it from the collection.

---

## 🗺️ Application Routes

The following routes represent the main pages and operations of the application.

| Route | HTTP Method | Description |
|---|---|---|
| `/profile` | GET | Displays all available profiles. |
| `/profile/:id` | GET | Displays a specific profile. |
| `/profile/create` | GET | Opens the form to create a profile. |
| `/profile/create` | POST | Submits a new profile, if implemented with this endpoint. |
| `/profile/:id/edit` | GET | Opens the edit form for a specific profile. |
| `/profile/:id` | PATCH | Updates selected fields of a profile. |
| `/profile/:id` | PUT | Replaces a profile, if full replacement is supported. |
| `/profile/:id` | DELETE | Deletes a specific profile. |

### About the Delete URL

The requested page URL `/profile/:id/delete` can be used as a custom deletion endpoint if that is how the application is implemented.

However, a common RESTful design uses `DELETE /profile/:id` to delete the resource.

The `/profile/:id/delete` path can instead be used for a confirmation page or a form that submits a deletion request.

The route definitions in your source code determine which design your deployed application actually uses.

---

## ⚙️ Complete Project Workflow

This section explains how a request moves through the application, from the user's browser to the server and back.

### Step 1: User Opens the Application

The user visits the live application:

`https://arraysrestfulloperation.onrender.com/profile`

The browser sends an HTTP `GET` request to the Express.js server.

### Step 2: Express.js Matches the Route

Express checks the incoming request against the routes registered in the application.

For example:

```javascript
app.get("/profile", (req, res) => {
    // Retrieve the available profile data
    // Render the profile listing
});
```

This is an illustrative example of route handling, not a verified copy of the deployed source code.

### Step 3: Application Retrieves the Data

The route handler accesses the collection containing the dummy profile records.

Depending on the implementation, the data might be stored in an array or another data source.

### Step 4: EJS Renders the Page

The server passes the available profile data to an EJS template.

Illustrative example:

```javascript
res.render("profile/index.ejs", { profiles });
```

The EJS template uses the supplied data to generate HTML, which is returned to the browser.

### Step 5: User Selects a Profile

When the user opens a particular profile, the browser requests a URL containing its identifier.

Example:

`/profile/1`

The server reads the route parameter:

```javascript
const id = req.params.id;
```

The application then finds the corresponding profile and renders its details.

### Step 6: User Creates a Profile

The user opens `/profile/create` and enters the required information.

The browser submits the form through a `POST` request.

The server processes the submitted data, validates it as appropriate, creates the new profile, and returns a response or redirects to another page.

### Step 7: User Edits a Profile

The user opens `/profile/:id/edit` and modifies the selected profile.

The form submits the changed fields using the application's configured update route.

If the form uses Method-Override, the submitted request can be interpreted as a `PATCH` or `PUT` request.

The server applies the changes and returns an appropriate response.

### Step 8: User Deletes a Profile

The user selects the delete action for a profile.

The application submits a deletion request, typically using Method-Override to convert a form submission into a `DELETE` request.

The server removes the selected record and redirects the user or renders a response.

### Step 9: Application Displays the Updated Collection

After a successful create, update, or delete operation, the application can redirect the browser to `/profile`.

The listing is rendered again using the current data.

If the data is stored only in memory, these changes generally remain available only while that server process retains the modified collection.

### Workflow Summary

```text
                  USER / BROWSER
                        |
                        v
                Express.js Server
                        |
                        v
                  Route Matching
                        |
           +------------+------------+
           |            |            |
           v            v            v
          READ         CREATE       EDIT / DELETE
           |            |            |
           v            v            v
      Retrieve Data  Process Form  Process Request
           |            |            |
           +------------+------------+
                        |
                        v
                   EJS Template
                        |
                        v
                 Rendered HTML
                        |
                        v
                  USER / BROWSER
```

---

## 🧠 Understanding RESTful Routing

REST stands for **Representational State Transfer**. It is an architectural style for designing interactions between clients and resources.

In this project, a profile represents a resource.

### What Is a Resource?

A resource is an entity that an application manages. Examples include:

- A user profile
- A product
- A blog post
- A student record
- An employee record

The application identifies an individual profile using a route parameter such as `:id`.

### What Is a Route Parameter?

A route parameter allows the application to identify a particular resource dynamically.

Example:

```javascript
app.get("/profile/:id", (req, res) => {
    const id = req.params.id;

    // Find and display the matching profile
});
```

For the URL `/profile/5`, the value of `req.params.id` is the string `"5"`.

The application must interpret and validate that value according to the format of its profile identifiers.

### What Is Method-Override?

HTML forms traditionally support `GET` and `POST` methods.

Method-Override allows a server-side application to interpret a supported request as another HTTP method, commonly `PATCH`, `PUT`, or `DELETE`.

For example, a form may submit a `POST` request containing a method-override field, and the middleware can change the effective method before the request reaches the route handler.

Illustrative setup:

```javascript
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
```

A form might use:

```html
<form action="/profile/5?_method=DELETE" method="POST">
    <button type="submit">Delete Profile</button>
</form>
```

The effective request method becomes `DELETE` when the middleware is configured and processes the request as expected.

### What Is Server-Side Rendering?

EJS is a templating engine that allows JavaScript data to be incorporated into HTML on the server.

Instead of returning only raw data, the application can return a complete HTML page containing profile information.

This makes EJS suitable for small server-rendered applications and learning projects.

---

## 💻 How to Run the Project Locally

Follow these steps to run the application on your computer.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Git](https://git-scm.com/), if you want to clone the repository
- A code editor such as Visual Studio Code

### Step 1: Clone the Repository

If your source code is available in a Git repository, run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual repository URL.

Alternatively, download the source code and open the project folder in your editor.

### Step 2: Open the Project Directory

```bash
cd YOUR_PROJECT_FOLDER
```

Replace the placeholder with the actual folder name.

### Step 3: Install Dependencies

If the project contains a `package.json` file, run:

```bash
npm install
```

This installs the dependencies declared by the project.

For a new project that does not yet have these dependencies, the typical packages used by this application include:

```bash
npm install express ejs method-override
```

Install only the packages your source code requires.

### Step 4: Start the Server

Check the scripts in your `package.json` file.

If the application uses `index.js`, you might start it with:

```bash
node index.js
```

If the entry point is `app.js`, use:

```bash
node app.js
```

If a start script is configured, you can use:

```bash
npm start
```

The correct command depends on the entry point defined in your project.

### Step 5: Open the Application

Visit the local URL in your browser.

For a server listening on port `3000`, the address would typically be:

`http://localhost:3000/profile`

If the application uses another port, replace `3000` with the configured value.

---

## 🔐 Environment Configuration

A typical Express application may read its port from an environment variable.

Illustrative example:

```javascript
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

On Render, the application should listen on the port provided through the environment.

If your application already handles the port correctly, no changes are necessary.

Because this project uses dummy data, a database connection is not required unless you have added one separately.

---

## 🧪 Testing the Application

You can test the application manually through the browser and HTML forms.

### Test 1: View All Profiles

Open:

`https://arraysrestfulloperation.onrender.com/profile`

**Expected result:** The page displays the available dummy profiles.

### Test 2: View a Specific Profile

Open a profile URL using an identifier that exists in your dataset.

Example:

`https://arraysrestfulloperation.onrender.com/profile/1`

**Expected result:** The application displays the matching profile.

If your application uses different identifiers, replace `1` with a valid ID.

### Test 3: Create a Profile

Open:

`https://arraysrestfulloperation.onrender.com/profile/create`

Complete the form and submit it.

**Expected result:** The new profile is added if the form and corresponding POST handler are implemented correctly.

### Test 4: Edit a Profile

Open:

`https://arraysrestfulloperation.onrender.com/profile/1/edit`

Modify the profile and submit the form.

**Expected result:** The application updates the selected profile if the corresponding update handler is implemented correctly.

### Test 5: Delete a Profile

Use the delete action provided by the application.

The deletion endpoint and HTTP method must match the implementation.

**Expected result:** The selected profile is removed from the active collection.

### Additional Test Cases

| Test Case | Expected Behavior |
|---|---|
| Open an existing profile | Display its details. |
| Open a nonexistent profile | Display an appropriate not-found response. |
| Submit a valid new profile | Add the new record. |
| Update an existing profile | Save the changed fields. |
| Delete an existing profile | Remove the record. |
| Submit invalid input | Reject or handle the input appropriately. |
| Restart an in-memory application | Previously modified data may be lost. |

---

## ⚠️ Error Handling

A reliable profile management application should handle common errors.

### Profile Not Found

When a requested profile does not exist, the application should return an appropriate `404 Not Found` response or render a not-found page.

### Invalid Profile Identifier

The application should validate the identifier before attempting to retrieve or modify a profile.

### Invalid Form Data

Required fields should be checked before creating or updating a profile.

### Failed Operations

If an operation fails, the application should return a suitable response instead of misleading the user into believing the change succeeded.

### Data Persistence

If the application stores profiles in an in-memory array, the records are not permanently stored. For persistent data, a database or another durable storage mechanism would be needed.

These are recommended practices; their presence in the current implementation depends on your source code.

---

## 📚 Learning Outcomes

Building this project provides hands-on experience with several important backend development concepts.

**1. Node.js Fundamentals**

Understanding how JavaScript executes on the server.

**2. Express.js Routing**

Handling incoming requests using HTTP methods and URL patterns.

**3. RESTful Architecture**

Designing routes around resources and their supported operations.

**4. CRUD Operations**

Implementing the fundamental data-management operations.

**5. EJS Templating**

Rendering dynamic HTML using server-side data.

**6. Route Parameters**

Using `req.params` to identify individual resources.

**7. Form Handling**

Processing form submissions and retrieving submitted values through request data.

**8. Method-Override**

Supporting RESTful HTTP methods through HTML forms.

**9. Data Manipulation**

Adding, retrieving, updating, and removing records from a collection.

**10. Deployment**

Making a Node.js application accessible through a public deployment URL.

---

## 🚀 Future Improvements

The project can be extended with the following features:

- **Database Integration:** Store profiles permanently using MongoDB or PostgreSQL.
- **Input Validation:** Validate required fields and reject invalid data.
- **Search Functionality:** Search profiles by name or other fields.
- **Filtering and Sorting:** Organize profiles according to selected criteria.
- **Pagination:** Divide large collections into manageable pages.
- **Improved UI:** Add responsive layouts, reusable components, and consistent styling.
- **Flash Messages:** Display success and error notifications after CRUD operations.
- **Confirmation Dialogs:** Ask users to confirm before deleting a profile.
- **Error Pages:** Create dedicated `404` and `500` pages.
- **Automated Testing:** Add tests for routes and data operations.
- **Persistent Storage:** Ensure changes survive server restarts.
- **Authentication and Authorization:** Restrict sensitive operations to authorized users.

These enhancements can help evolve the learning project into a more complete profile management application.

---

## 📌 Important Notes

- This project is intended for learning and demonstration purposes.
- The application uses dummy profile data rather than a verified production database.
- The deployed version's exact behavior depends on the current source code and server configuration.
- If records are stored in memory, creating, updating, or deleting them may not permanently change the dataset.
- The routes listed in this README describe the intended application functionality. Verify the actual HTTP methods and form submission URLs against your Express route handlers.
- Do not use real personal information in a demonstration dataset unless appropriate security and privacy measures are in place.

---

## 👨‍💻 Author

**Preetam Kumar**

This project demonstrates practical learning in backend web development using Node.js, Express.js, EJS, and RESTful routing.

### Project Links

- **Live Application:** [RESTful Profile Management System](https://arraysrestfulloperation.onrender.com/profile)
- **GitHub Repository:** Add your repository URL here.

---

## ⭐ Support

If you find this project useful for learning backend development, consider starring the repository on GitHub.

Feedback and suggestions for improvement are welcome.

**Built to practice RESTful routing, CRUD operations, and server-side rendering with Node.js and Express.js.**
