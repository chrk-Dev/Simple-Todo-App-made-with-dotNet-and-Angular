# README

This repository contains a basic Todo application built using the .NET framework for the backend and Angular for the frontend. The application supports CRUD (Create, Read, Update, Delete) operations to manage a list of tasks.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Backend Setup ](#backend-setup )
    - [API Endpoints](#api-endpoints)
4. [Frontend Setup](#frontend-setup)
5. [Screenshot](#screenshot)


## Prerequisites
Before you begin, ensure you have the following tools installed:
- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/guide/setup-local)

## Getting Started
1. Clone this repository:
   ```bash
   git clone https://github.com/chrk-Dev/Simple-Todo-App-made-with-dotNet-and-Angular.git
      ```

   ##  Backend Setup 

i.  Navigate to the project directory:

   ```bash  
   cd todoAppBackend
```

ii.  Install backend dependencies:
    
```bash  
dotnet restore
```


iii.  Run Backend:
    
    
   ```bash 
dotnet run
 ```
   
   
####  API Endpoints
-   **GET /api/todo**: Get all Todo items.
-   **GET /api/todo/{id}**: Get a specific Todo item by ID.
-   **POST /api/todo**: Create a new Todo item.
-   **PUT /api/todo/{id}**: Update a Todo item by ID.
-   **DELETE /api/todo/{id}**: Delete a Todo item by ID.


    ## Frontend Setup 
i.  Navigate to the project directory:

   ```bash  
   cd todoAppFrontend
```

ii.  Install backend dependencies:
    
```bash  
npm install
```


iii.  Run Backend:
    
    
   ```bash 
ng serve 
 ```
 ### or
   ```bash 
npm run start
 ```


## Screenshot

![Screerecode](/screenshots/recording.gif "a title")

![Screenshot](/screenshots/Screenshot.png "a title")
