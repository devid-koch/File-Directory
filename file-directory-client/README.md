## Instructions to Run the App
## This guide will walk you through setting up and running the app locally.

## Prerequisites
## Before starting, make sure you have the following installed on your system:

## Node.js (version 16 or above)
        You can download and install Node.js from the official Node.js website.
        npm (Node Package Manager), which comes with Node.js.
        You can check the installation by running the following commands in your terminal:

        node -v
        npm -v
## Steps to Run the Application
## 1. Clone the Repository
        First, clone the repository to your local machine.

        git clone https://github.com/devid-koch/file-directory
        cd file-directory-client
        cd client
## 2. Install Dependencies
        Navigate to your project folder and install the required dependencies using npm.

        npm install
        This command will install all the dependencies listed in the package.json file.

## 3. Configure Environment Variables
        Create a .env file in the root of your project (if it doesn't already exist). This file will contain environment-specific variables for your app.

        Create a .env file and add the following content:
        VITE_API_URL=http://localhost:5000/api/
        Note: Ensure the VITE_API_URL is set to the correct base URL for your backend API. This example assumes the API is running locally on port 5000.
## 4. Run the Development Server
        To start the development server and run your app locally, use the following command:

        npm run dev
        This will launch the development server at http://localhost:5173.

        The development server will automatically reload the page whenever you make changes to the code.
## 5. Build the Application (for Production)
        To build the app for production, use the following command:

        npm run build
        This will create an optimized build of the app in the dist folder.


        Additional Information
        Scripts in package.json
        npm run dev: Starts the Vite development server for local development.
        npm run build: Builds the project for production (creates the dist folder).
        npm run preview: Previews the production build.
        npm run lint: Runs ESLint on your code to check for linting issues.
        Dependencies
        This project uses the following dependencies:

        @tanstack/react-query: For data fetching and caching.
        axios: For making HTTP requests.
        react-router-dom: For routing in React.
        react-hook-form: For handling forms in React.
        react-hot-toast: For displaying toast notifications.
        Development Tools
        Vite: A fast build tool and development server.
        ESLint: A static code analysis tool to find and fix problems in your JavaScript and TypeScript code.