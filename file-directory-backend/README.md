# File Directory App

A web application that allows users to create, rename, delete, and manage folders and files in a directory structure. The app uses a frontend built with React and a backend with Node.js to handle API requests for managing folders and files.

## Features
- View folder structure in a tree format
- Add new folders and files
- Rename folders and files
- Delete folders and files

## Requirements

Before you begin, make sure you have the following software installed:

- Node.js (version 14 or above)
- npm or yarn (for managing dependencies)

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

git clone https://github.com/devid-koch/file-directory.git
cd file-directory-backend

## 2. Backend Setup (Node.js)
Install Backend Dependencies
Navigate to the backend directory and install the required dependencies:

npm install

Configure the Backend
Create a .env file in the root of the backend folder and add any necessary environment variables. Example:

        DB_NAME=
        DB_USER=postgres
        DB_PASSWORD=
        DB_HOST=localhost
        DB_PORT=5432
        DB_DIALECT=postgres

        Make sure your database is running and connected (if applicable).
        Start the Backend Server


## 3. Run the server
        npm run dev
        npm start