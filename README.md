# Expensify-app
A web application to track savings and expenditure on a daily basis using React-JS. It uses FireBase as a backend for databse, Node and express to serve up a server for the application<br/><br/>

The website can be accessed [here expensify-budgetapp.herokuapp.com](https://expensify-budgetapp.herokuapp.com/)<br/>
Ensure you have git and npm installed

## Steps to build:
* open command prompt(windows) or terminal(Mac/Linux)
* Run command -> `git clone https://github.com/pranav1601/Expensify-app.git`
* Run command -> `Expensify-app.git`
* Run command -> `npm run build:dev`
* Run command -> `npm run dev-server`

Open a window on your web browser and head to `localhost:8080`

## Things to keep in mind
* The project uses FireBase for authentication purposes, hence the code will not execute because of the following missing variables:
* FIREBASE_API_KEY
* FIREBASE_AUTH_DOMAIN
* FIREBASE_DATABASE_URL
* FIREBASE_PROJECT_ID
* FIREBASE_STORAGE_BUCKET
* FIREBASE_MESSAGING_SENDER_ID
* FIREBASE_APP_ID
If you would like to run it on your private firebase database, you need to define these in `env.development` file that has to be located in the parent directory of the project.
<br/>
I would recommend you to head over [here](https://expensify-budgetapp.herokuapp.com/) to access the application.
